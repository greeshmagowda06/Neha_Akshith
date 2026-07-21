import { d as TSS_SERVER_FUNCTION, t as createServerFn } from "./createServerFn-CIHAFgYl.js";
import nodemailer from "nodemailer";
//#region node_modules/@tanstack/start-server-core/dist/esm/createServerRpc.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/Neha_Akshith/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/lib/rsvp-email.ts?tss-serverfn-split
var sendRsvpEmail_createServerFn_handler = createServerRpc({
	id: "d27e2b5edd646a3f296603629d7f2132a415f70ee2b08aae8610bd7a8ba35d4b",
	name: "sendRsvpEmail",
	filename: "src/lib/rsvp-email.ts"
}, (opts) => sendRsvpEmail.__executeServer(opts));
var sendRsvpEmail = createServerFn({ method: "POST" }).handler(sendRsvpEmail_createServerFn_handler, async ({ data }) => {
	const payload = data;
	const toEmail = process.env.RSVP_TO_EMAIL ?? "nehamdevaraj@gmail.com";
	const fromEmail = process.env.SMTP_FROM_EMAIL ?? process.env.SMTP_USER;
	if (!toEmail || !fromEmail) throw new Error("Missing RSVP email configuration. Set RSVP_TO_EMAIL and SMTP_FROM_EMAIL (or SMTP_USER).");
	const host = process.env.SMTP_HOST;
	const port = Number(process.env.SMTP_PORT ?? 587);
	const user = process.env.SMTP_USER;
	const pass = process.env.SMTP_PASS;
	if (!host || !user || !pass) throw new Error("Missing SMTP configuration. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.");
	const transport = nodemailer.createTransport({
		host,
		port,
		secure: port === 465,
		auth: {
			user,
			pass
		}
	});
	const attendance = [payload.reception ? "Reception" : null, payload.wedding ? "Wedding" : null].filter(Boolean).join(", ") || "None selected";
	await transport.sendMail({
		from: fromEmail,
		to: toEmail,
		subject: `RSVP from ${payload.name}`,
		text: [
			`Name: ${payload.name}`,
			`Phone: ${payload.phone}`,
			`Guests: ${payload.guests}`,
			`Events: ${attendance}`
		].join("\n")
	});
	return { ok: true };
});
//#endregion
export { sendRsvpEmail_createServerFn_handler };
