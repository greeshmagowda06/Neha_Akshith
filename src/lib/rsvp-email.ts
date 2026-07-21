import nodemailer from "nodemailer";
import { createServerFn } from "@tanstack/react-start";

type RsvpPayload = {
  name: string;
  phone: string;
  guests: number;
  reception: boolean;
  wedding: boolean;
};

export const sendRsvpEmail = createServerFn({ method: "POST" }).handler(async ({ data }) => {
  const payload = data as RsvpPayload;
  const toEmail = process.env.RSVP_TO_EMAIL ?? "nehamdevaraj@gmail.com";
  const fromEmail = process.env.SMTP_FROM_EMAIL ?? process.env.SMTP_USER;

  if (!toEmail || !fromEmail) {
    throw new Error("Missing RSVP email configuration. Set RSVP_TO_EMAIL and SMTP_FROM_EMAIL (or SMTP_USER).");
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("Missing SMTP configuration. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.");
  }

  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  const attendance = [payload.reception ? "Reception" : null, payload.wedding ? "Wedding" : null]
    .filter(Boolean)
    .join(", ") || "None selected";

  await transport.sendMail({
    from: fromEmail,
    to: toEmail,
    subject: `RSVP from ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Guests: ${payload.guests}`,
      `Events: ${attendance}`,
    ].join("\n"),
  });

  return { ok: true };
});