import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { validateContactPayload, escapeHtml } from "@/lib/sanitize";

export async function POST(req: Request) {
  try {
    // 1. IP-based Rate Limiting (5 requests per 10 minutes per IP)
    const clientIp = getClientIp(req);
    const rateLimit = checkRateLimit(clientIp, {
      maxRequests: 5,
      windowMs: 10 * 60 * 1000,
    });

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: `Too many submissions. Please wait ${rateLimit.retryAfterSeconds} seconds before sending another message.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfterSeconds),
          },
        }
      );
    }

    // 2. Parse request body
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { website, renderedAt } = body as Record<string, unknown>;

    // 3. Bot Protection:
    // a) Honeypot: The invisible "website" field should never be filled by real humans
    // b) Timing trap: Forms submitted faster than 1.5 seconds indicate an automated script
    const isBot =
      Boolean(website) ||
      (typeof renderedAt === "number" && Date.now() - renderedAt < 1500);

    if (isBot) {
      // Silently discard spam without burning SMTP quota or alerting the bot
      return NextResponse.json({ ok: true });
    }

    // 4. Validate & Sanitize Input
    const validation = validateContactPayload(body);
    if (!validation.valid || !validation.data) {
      return NextResponse.json(
        { error: validation.error || "Invalid form fields." },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data;

    // 5. Environment & Credentials Verification
    const emailUser = process.env.CONTACT_EMAIL_USER?.trim();
    const emailPass = process.env.CONTACT_EMAIL_PASS?.replace(/\s+/g, "");
    const recipient = process.env.CONTACT_EMAIL_TO?.trim() || emailUser;

    if (!emailUser || !emailPass) {
      console.error(
        "Contact API Error: CONTACT_EMAIL_USER or CONTACT_EMAIL_PASS is missing in environment variables."
      );
      return NextResponse.json(
        {
          error:
            "Email service is temporarily unavailable. Please reach out directly to gajarebhargav@gmail.com.",
        },
        { status: 503 }
      );
    }

    // 6. Transporter Configuration (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // 7. Sanitized Email Templates (Anti-Injection & DMARC/SPF compliance)
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessageHtml = escapeHtml(message).replace(/\n/g, "<br/>");

    await transporter.sendMail({
      from: `"Bhargav Gajare Portfolio" <${emailUser}>`,
      to: recipient,
      replyTo: email,
      subject: `Portfolio Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #111827; margin-top: 0; font-size: 20px; font-weight: 700;">New Contact Form Message</h2>
          <p style="margin: 8px 0; font-size: 15px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 8px 0; font-size: 15px;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a></p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="margin-bottom: 8px; font-size: 15px;"><strong>Message:</strong></p>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; border: 1px solid #f3f4f6; white-space: pre-wrap; font-size: 15px; color: #374151;">${safeMessageHtml}</div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    console.error("Contact Form SMTP Error:", error);

    // Return a safe, masked error message without exposing server internals
    return NextResponse.json(
      {
        error:
          "Unable to send message right now. Please try again or email directly at gajarebhargav@gmail.com.",
      },
      { status: 500 }
    );
  }
}
