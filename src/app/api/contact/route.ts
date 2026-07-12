import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    const emailUser = process.env.CONTACT_EMAIL_USER?.trim();
    // Google App Passwords are often copied with spaces (e.g. "abcd efgh ijkl mnop")
    const emailPass = process.env.CONTACT_EMAIL_PASS?.replace(/\s+/g, "");

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        { error: "Email service is not configured properly (.env.local missing credentials)." },
        { status: 500 }
      );
    }

    // Configure Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const recipient =
      process.env.CONTACT_EMAIL_TO || process.env.CONTACT_EMAIL_USER;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: recipient,
      replyTo: email,
      subject: `Portfolio Contact Form: Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #111;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Contact Form Email Error:", error);

    if (error?.code === "EAUTH" || error?.responseCode === 535) {
      return NextResponse.json(
        {
          error:
            "Gmail SMTP Authentication Failed: Please make sure you are using a 16-character Google App Password (not your normal Gmail password) in .env.local.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
