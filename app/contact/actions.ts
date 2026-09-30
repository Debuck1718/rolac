"use server";

import { z } from "zod";
import { buildMailto, isSmtpConfigured } from "@/lib/contact";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  /** Prefilled mailto: link, offered when direct sending is unavailable. */
  fallbackHref?: string;
  errors?: {
    name?: string[];
    contact?: string[];
    topic?: string[];
    message?: string[];
  };
};

const topics = [
  "Programs and courses",
  "Opportunities (study or teaching)",
  "Services",
  "Partnerships",
  "Events and culture",
  "Something else",
] as const;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "That name is too long."),
  contact: z
    .string()
    .trim()
    .min(5, "Please enter an email address or phone number.")
    .max(200, "That contact detail is too long.")
    .refine(
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
        /^[+()\d][\d\s()-]{6,}$/.test(value),
      "Enter a valid email address or phone number.",
    ),
  topic: z.enum(topics, { error: "Please choose a topic." }),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little more — at least 10 characters.")
    .max(4000, "That message is too long."),
  // Honeypot: bots fill hidden fields, humans never see them.
  website: z.string().max(0).optional(),
});

type FieldErrors = NonNullable<ContactFormState["errors"]>;

/** Zod's issues are a flat list; group them into per-field messages. */
function mapFieldErrors(error: z.ZodError): FieldErrors {
  const grouped: FieldErrors = {};

  for (const issue of error.issues) {
    const field = issue.path[0];
    if (
      field === "name" ||
      field === "contact" ||
      field === "topic" ||
      field === "message"
    ) {
      grouped[field] ??= [];
      grouped[field]!.push(issue.message);
    }
  }

  return grouped;
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    contact: formData.get("contact"),
    topic: formData.get("topic"),
    message: formData.get("message"),
    website: formData.get("website"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      errors: mapFieldErrors(parsed.error),
    };
  }

  // Honeypot tripped — pretend it worked so bots do not retry.
  if (parsed.data.website) {
    return {
      status: "success",
      message: "Thank you — your message has been sent.",
    };
  }

  const { name, contact, topic, message } = parsed.data;
  const email = process.env.CONTACT_TO_EMAIL ?? "rolac4all@gmail.com";

  // Without SMTP credentials we cannot deliver silently — say so honestly
  // instead of showing a false confirmation, and hand the visitor a
  // pre-filled email they can send in one tap.
  if (!isSmtpConfigured()) {
    return {
      status: "error",
      message:
        "Direct sending is not set up on this site yet. Please tap below to send your message by email, or message us on WhatsApp.",
      fallbackHref: buildMailto({ name, contact, topic, message, to: email }),
    };
  }

  try {
    const { sendContactEmail } = await import("@/lib/mail");
    await sendContactEmail({ name, contact, topic, message, to: email });
  } catch (error) {
    console.error("Contact form failed to send:", error);
    return {
      status: "error",
      message:
        "Sorry, we could not send your message. Please email us directly at rolac4all@gmail.com or message us on WhatsApp.",
      fallbackHref: buildMailto({ name, contact, topic, message, to: email }),
    };
  }

  return {
    status: "success",
    message:
      "Thank you — your message has been sent. We usually reply within two working days.",
  };
}
