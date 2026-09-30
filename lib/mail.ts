import nodemailer from "nodemailer";

type ContactEmail = {
  name: string;
  contact: string;
  topic: string;
  message: string;
  to: string;
};

/**
 * Sends contact form submissions to the ROLAC inbox over SMTP.
 *
 * Credentials come from environment variables (SMTP_HOST, SMTP_PORT,
 * SMTP_USER, SMTP_PASS, SMTP_FROM) so they never sit in the repository.
 *
 * Callers should check `isSmtpConfigured()` first — this function assumes a
 * real transport is available and throws if sending fails.
 */
export async function sendContactEmail({
  name,
  contact,
  topic,
  message,
  to,
}: ContactEmail) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS.",
    );
  }

  const port = Number(process.env.SMTP_PORT ?? 587);
  const from = process.env.SMTP_FROM ?? `ROLAC Website <${user}>`;

  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transport.sendMail({
    from,
    to,
    // Let the visitor reply straight to their own address when they gave one.
    replyTo: contact.includes("@") ? contact : undefined,
    subject: `[ROLAC] ${topic} — ${name}`,
    text: [
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Topic: ${topic}`,
      "",
      message,
    ].join("\n"),
  });
}
