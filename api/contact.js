import { sql } from "@vercel/postgres";
import nodemailer from "nodemailer";

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "https://ritwickrajmakhal.github.io";

function setCors(res) {
	res.setHeader("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
	res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function isValidEmail(email) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(String(email).toLowerCase());
}

function escapeHtml(s) {
	return String(s)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

export default async function handler(req, res) {
	setCors(res);

	if (req.method === "OPTIONS") {
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

		if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
			return res.status(400).json({ error: "Invalid field types" });
		}

		const trimmedName = name.trim().slice(0, 100);
		const trimmedEmail = email.trim().slice(0, 254);
		const trimmedMessage = message.trim().slice(0, 5000);

		if (!isValidEmail(trimmedEmail)) {
			return res.status(400).json({ error: "Invalid email address" });
		}

		// Insert into Vercel Postgres (schema: portfolio, table: contact)
		try {
			await sql`
				INSERT INTO portfolio.contact (name, email, message)
				VALUES (${trimmedName}, ${trimmedEmail}, ${trimmedMessage})
			`;
		} catch (dbErr) {
			console.error("DB insert error:", dbErr);
			return res.status(500).json({ error: "Database error" });
		}

		// Send email notification if SMTP and OWNER_EMAIL are configured
		const smtpHost = process.env.SMTP_HOST;
		let emailSent = false;
		if (smtpHost && process.env.OWNER_EMAIL) {
			const transporter = nodemailer.createTransport({
				host: smtpHost,
				port: Number(process.env.SMTP_PORT) || 587,
				secure: process.env.SMTP_SECURE === "true",
				auth: process.env.SMTP_USER
					? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
					: undefined,
			});

			const owner = process.env.OWNER_EMAIL;
			try {
				await transporter.sendMail({
					from: process.env.SMTP_FROM || process.env.SMTP_USER || owner,
					to: owner,
					subject: `New message from ${trimmedName}`,
					text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`,
					html: `<p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p><p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p><p><strong>Message:</strong><br/>${escapeHtml(trimmedMessage).replace(/\n/g, "<br/>")}</p>`,
				});
				emailSent = true;
			} catch (mailErr) {
				console.error("Email send error:", mailErr);
				// don't fail the request because of email failure; continue
			}
		}

		return res.status(200).json({ ok: true, emailSent });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: "Server error" });
	}
}
