"use server";

import { z } from "zod";
import { isSmtpConfigured } from "@/lib/contact";

export type ApplicationState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    applicationType?: string[];
    programme?: string[];
    message?: string[];
    document?: string[];
  };
};

const applicationTypes = ["Student", "Teacher", "Other applicant"] as const;
const programmes = [
  "Professional English",
  "French Immersion",
  "Student Exchange",
  "Teacher Placement",
  "Other / I am not sure",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(40),
  applicationType: z.enum(applicationTypes, { error: "Please choose an applicant type." }),
  programme: z.enum(programmes, { error: "Please choose a programme." }),
  message: z.string().trim().max(2000, "Please keep your message under 2,000 characters.").optional(),
  website: z.string().max(0).optional(),
});

// Keep below Vercel's serverless request limit, allowing multipart overhead.
const MAX_FILE_SIZE = 4 * 1024 * 1024;
const allowedTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function fieldErrors(error: z.ZodError): ApplicationState["errors"] {
  const errors: NonNullable<ApplicationState["errors"]> = {};
  const fields = new Set([
    "name",
    "email",
    "phone",
    "applicationType",
    "programme",
    "message",
  ]);

  for (const issue of error.issues) {
    const field = issue.path[0];
    if (typeof field === "string" && fields.has(field)) {
      const key = field as keyof typeof errors;
      errors[key] ??= [];
      errors[key]!.push(issue.message);
    }
  }
  return errors;
}

export async function submitApplication(
  _previous: ApplicationState,
  formData: FormData,
): Promise<ApplicationState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    applicationType: formData.get("applicationType"),
    programme: formData.get("programme"),
    message: formData.get("message"),
    website: formData.get("website"),
  });

  const documentEntry = formData.get("document");
  const uploadedFile = documentEntry instanceof File ? documentEntry : null;
  const documentError =
    !uploadedFile || uploadedFile.size === 0
      ? "Please upload your completed registration form."
      : uploadedFile.size > MAX_FILE_SIZE
        ? "The document must be 4 MB or smaller."
        : !allowedTypes.has(uploadedFile.type)
          ? "Upload a PDF, DOC, or DOCX file."
          : undefined;

  if (!parsed.success || documentError) {
    return {
      status: "error",
      message: "Please check the application details and try again.",
      errors: {
        ...(parsed.success ? {} : fieldErrors(parsed.error)),
        ...(documentError ? { document: [documentError] } : {}),
      },
    };
  }

  if (parsed.data.website) {
    return { status: "success", message: "Thank you — your application has been received." };
  }

  if (!isSmtpConfigured()) {
    return {
      status: "error",
      message: "Application submission is not connected yet. Please email your completed form to rolac4all@gmail.com while the portal email service is being configured.",
    };
  }

  try {
    const { sendContactEmail } = await import("@/lib/mail");
    if (!uploadedFile) {
      return {
        status: "error",
        message: "Please upload your completed registration form.",
        errors: { document: ["Please upload your completed registration form."] },
      };
    }

    const buffer = Buffer.from(await uploadedFile.arrayBuffer());
    await sendContactEmail({
      name: parsed.data.name,
      contact: `${parsed.data.email} / ${parsed.data.phone}`,
      topic: `Application — ${parsed.data.applicationType} — ${parsed.data.programme}`,
      message: parsed.data.message || "Completed registration form attached.",
      to: process.env.CONTACT_TO_EMAIL ?? "rolac4all@gmail.com",
      attachments: [{ filename: uploadedFile.name, content: buffer, contentType: uploadedFile.type }],
    });
  } catch (error) {
    console.error("Application submission failed:", error);
    return {
      status: "error",
      message: "We could not send your application right now. Please email the completed form to rolac4all@gmail.com.",
    };
  }

  return {
    status: "success",
    message: "Thank you — your application and completed form have been sent. Our team will review them and contact you.",
  };
}
