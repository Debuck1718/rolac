export function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS,
  );
}

type Enquiry = {
  name: string;
  contact: string;
  topic: string;
  message: string;
  to: string;
};

/** Builds a pre-filled mailto: link as a no-backend fallback. */
export function buildMailto({
  name,
  contact,
  topic,
  message,
  to,
}: Enquiry) {
  const subject = `[ROLAC] ${topic} — ${name}`;
  const body = [
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Topic: ${topic}`,
    "",
    message,
  ].join("\n");

  return `mailto:${to}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
