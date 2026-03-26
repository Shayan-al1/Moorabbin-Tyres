import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS_RAW = process.env.EMAIL_PASS;
const OWNER_EMAIL = process.env.OWNER_EMAIL;

const normalizeEmail = (value) => {
  if (value === undefined || value === null) return null;
  const trimmed = String(value).trim();
  if (!trimmed) return null;
  return trimmed;
};

const isValidEmail = (value) => {
  const email = normalizeEmail(value);
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const getTransporter = () => {
  const user = EMAIL_USER;
  const pass = EMAIL_PASS_RAW ? String(EMAIL_PASS_RAW).replace(/\s+/g, "") : null;

  if (!user) throw new Error("Missing EMAIL_USER in environment");
  if (!pass) throw new Error("Missing EMAIL_PASS in environment");

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
};

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const formatBookingHtml = (booking) => {
  const rows = [
    ["Name", booking?.name],
    ["Phone", booking?.phone],
    ["Email", booking?.email || "(not provided)"],
    ["Vehicle Type", booking?.vehicleType],
    ["Tyre Service", booking?.tyreService],
    ["Other Service", booking?.otherServiceText || ""],
    ["Date", booking?.date],
    ["Time", booking?.time || ""],
    ["Status", booking?.status || "pending"],
  ];

  const list = rows
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 10px;border:1px solid #ddd;"><b>${escapeHtml(
          k
        )}</b></td><td style="padding:6px 10px;border:1px solid #ddd;">${escapeHtml(
          v
        )}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.4;">
      <h2 style="margin:0 0 12px;">New Booking</h2>
      <table style="border-collapse:collapse;">${list}</table>
    </div>
  `.trim();
};

export const sendBookingEmail = async (booking) => {
  const fromEmail = normalizeEmail(EMAIL_USER);
  const toEmail = normalizeEmail(OWNER_EMAIL);
  const replyToEmail = isValidEmail(booking?.email)
    ? normalizeEmail(booking.email)
    : undefined;

  if (!OWNER_EMAIL) throw new Error("Missing OWNER_EMAIL in environment");
  if (!isValidEmail(fromEmail)) throw new Error("EMAIL_USER is not a valid email");
  if (!isValidEmail(toEmail)) throw new Error("OWNER_EMAIL is not a valid email");

  const subject = `Booking Confirmed${booking?.name ? ` - ${booking.name}` : ""}`;
  const htmlContent = formatBookingHtml(booking);
  const textContent = [
    "New Booking",
    "",
    `Name: ${booking?.name ?? ""}`,
    `Phone: ${booking?.phone ?? ""}`,
    `Email: ${booking?.email ?? ""}`,
    `Vehicle Type: ${booking?.vehicleType ?? ""}`,
    `Tyre Service: ${booking?.tyreService ?? ""}`,
    `Other Service: ${booking?.otherServiceText ?? ""}`,
    `Date: ${booking?.date ?? ""}`,
    `Time: ${booking?.time ?? ""}`,
    `Status: ${booking?.status ?? "pending"}`,
  ]
    .map((line) => String(line))
    .join("\n");

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: replyToEmail,
      subject,
      text: textContent,
      html: htmlContent,
    });
  } catch (err) {
    const details = {
      message: err?.message,
      code: err?.code,
      response: err?.response,
    };
    console.error("Nodemailer sendBookingEmail failed:", details);
    throw err;
  }
};
