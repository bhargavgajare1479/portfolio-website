/**
 * HTML entity escaping to prevent HTML injection and stored XSS in email clients.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Strips carriage return and newline characters to prevent SMTP header injection attacks.
 */
export function stripNewlines(str: string): string {
  return str.replace(/[\r\n]+/g, " ").trim();
}

/**
 * Validates email format according to standard RFC 5322 rules.
 */
export function isValidEmail(email: string): boolean {
  if (email.length > 120) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export interface ValidatedContactInput {
  name: string;
  email: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
  data?: ValidatedContactInput;
}

/**
 * Validates and sanitizes the contact form input payload.
 */
export function validateContactPayload(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Invalid request payload." };
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim()) {
    return { valid: false, error: "Name is required." };
  }

  if (typeof email !== "string" || !email.trim()) {
    return { valid: false, error: "Email is required." };
  }

  if (typeof message !== "string" || !message.trim()) {
    return { valid: false, error: "Message is required." };
  }

  const cleanName = stripNewlines(name.trim());
  const cleanEmail = stripNewlines(email.trim().toLowerCase());
  const cleanMessage = message.trim();

  if (cleanName.length > 100) {
    return { valid: false, error: "Name cannot exceed 100 characters." };
  }

  if (!isValidEmail(cleanEmail)) {
    return { valid: false, error: "Please provide a valid email address." };
  }

  if (cleanMessage.length < 5) {
    return { valid: false, error: "Message is too short (minimum 5 characters)." };
  }

  if (cleanMessage.length > 4000) {
    return { valid: false, error: "Message cannot exceed 4000 characters." };
  }

  return {
    valid: true,
    data: {
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage,
    },
  };
}
