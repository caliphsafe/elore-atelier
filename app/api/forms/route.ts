import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const TO_EMAIL = process.env.FORM_TO_EMAIL || "bookingelore@gmail.com";

function clean(value: unknown, max = 4000) {
  return String(value ?? "").trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char] || char));
}

export async function POST(request: Request) {
  try {
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_APP_PASSWORD;

    if (!smtpUser || !smtpPass) {
      console.error("Missing SMTP_USER or SMTP_APP_PASSWORD");
      return NextResponse.json({ ok: false, error: "Email service is not configured." }, { status: 500 });
    }

    const data = await request.json();

    // Honeypot: bots that fill this hidden field are accepted without sending.
    if (clean(data.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const type = clean(data.type, 40);
    const name = clean(data.name, 150);
    const email = clean(data.email, 320);
    const phone = clean(data.phone, 80);

    if (!type || !name || !email) {
      return NextResponse.json({ ok: false, error: "Please complete the required fields." }, { status: 400 });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    let subject = "";
    let rows: Array<[string, string]> = [];

    if (type === "contact") {
      subject = `ELÖRE Inquiry — ${clean(data.subject, 180) || "Website Inquiry"}`;
      rows = [
        ["Name", name], ["Email", email], ["Phone", phone || "Not provided"],
        ["Subject", clean(data.subject, 180) || "Website Inquiry"],
        ["Message", clean(data.message) || "Not provided"],
      ];
    } else if (type === "experience") {
      subject = `Workshop Booking Request — ${clean(data.workshop, 120)}`;
      rows = [
        ["Workshop", clean(data.workshop, 120)], ["Guest count", clean(data.guests, 20)],
        ["Preferred date", clean(data.preferredDate, 40)], ["Preferred time", clean(data.preferredTime, 80)],
        ["Name", name], ["Email", email], ["Phone", phone || "Not provided"],
        ["Occasion", clean(data.occasion, 200) || "Not provided"],
        ["Notes", clean(data.notes) || "Not provided"],
      ];
    } else if (type === "custom") {
      subject = `Custom Hat Consultation — ${name}`;
      rows = [
        ["Name", name], ["Email", email], ["Phone", phone || "Not provided"],
        ["Preferred consultation date", clean(data.preferredDate, 40) || "Flexible"],
        ["Hat style / direction", clean(data.hatStyle, 300) || "Not provided"],
        ["Head measurement", clean(data.headSize, 100) || "Not provided"],
        ["Budget range", clean(data.budget, 100) || "Not provided"],
        ["Custom direction / notes", clean(data.notes) || "Not provided"],
      ];
    } else {
      return NextResponse.json({ ok: false, error: "Unknown form type." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n\n");
    const html = `<div style="font-family:Arial,sans-serif;line-height:1.55;color:#221f1e">
      <h2 style="font-weight:500">New ELÖRE ${escapeHtml(type)} submission</h2>
      ${rows.map(([label, value]) => `<p><strong>${escapeHtml(label)}</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`).join("")}
    </div>`;

    await transporter.sendMail({
      from: `"ELÖRE Website" <${smtpUser}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("ELÖRE form email error:", error);
    return NextResponse.json({ ok: false, error: "We could not send your request. Please try again." }, { status: 500 });
  }
}
