import { sql } from "@vercel/postgres";
import nodemailer from "nodemailer";

const ALLOWED_ORIGIN = process.env.FRONTEND_ORIGIN || "https://ritwickrajmakhal.github.io";

function setCors(res) {
	res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
	res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req, res) {
	setCors(res);

	if (req.method === "OPTIONS") {
		// Respond to preflight
		return res.status(204).end();
	}

	if (req.method !== "POST") {
		res.setHeader("Allow", "POST, OPTIONS");
		return res.status(405).json({ error: "Method not allowed" });
	}

	try {
		const { name, email, message } = req.body || {};
		if (!name || !email || !message) {
			return res.status(400).json({ error: "Missing required fields" });
		}

		// Insert into Vercel Postgres (schema: portfolio, table: contact)
		await sql`
			INSERT INTO portfolio.contact (name, email, message)
			VALUES (${name}, ${email}, ${message})
		`;

		// Configure nodemailer transporter using SMTP env vars
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT) || 587,
			secure: process.env.SMTP_SECURE === "true",
			auth: process.env.SMTP_USER
				? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
				: undefined,
		});

		const owner = process.env.OWNER_EMAIL;
		if (owner) {
			await transporter.sendMail({
				from: process.env.SMTP_FROM || process.env.SMTP_USER || owner,
				to: owner,
				subject: `New message from ${name}`,
				text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
				html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${String(
					message
				).replace(/\n/g, "<br/>")}</p>`,
			});
		}

		return res.status(200).json({ ok: true });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Server error" });
	}
}
