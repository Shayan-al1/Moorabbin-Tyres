import { BrevoClient } from "@getbrevo/brevo";
import dotenv from "dotenv";

dotenv.config();

const BREVO_API_KEY = process.env.BREVO_API_KEY;
if (!BREVO_API_KEY) {
  throw new Error("Missing BREVO_API_KEY in environment");
}

const SENDER_EMAIL =
  process.env.BREVO_SENDER_EMAIL ||
  process.env.OWNER_EMAIL ||
  process.env.EMAIL_USER;

if (!SENDER_EMAIL) {
  throw new Error(
    "Missing sender email. Set BREVO_SENDER_EMAIL (recommended) or OWNER_EMAIL/EMAIL_USER."
  );
}

const SENDER_NAME = process.env.BREVO_SENDER_NAME || "Moorabbin Tyres";
const OWNER_EMAIL = process.env.OWNER_EMAIL;

const brevo = new BrevoClient({ apiKey: BREVO_API_KEY });

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
  const senderEmail = normalizeEmail(SENDER_EMAIL);
  if (!isValidEmail(senderEmail)) {
    throw new Error(
      "Sender email is invalid. Set a valid BREVO_SENDER_EMAIL (or OWNER_EMAIL/EMAIL_USER)."
    );
  }

  const ownerEmail = normalizeEmail(OWNER_EMAIL);
  const bookingEmail = normalizeEmail(booking?.email);

  const ownerRecipient = isValidEmail(ownerEmail)
    ? { email: ownerEmail, name: "Owner" }
    : null;

  const customerRecipient = isValidEmail(bookingEmail)
    ? { email: bookingEmail, name: booking?.name || "Customer" }
    : null;

  if (!ownerRecipient && !customerRecipient) {
    throw new Error(
      "No valid recipients for booking email. Set a valid OWNER_EMAIL and/or ensure booking.email is a valid email."
    );
  }

  const subject = `Booking Confirmed${booking?.name ? ` - ${booking.name}` : ""}`;
  const htmlContent = formatBookingHtml(booking);

  try {
    const send = (to) =>
      brevo.transactionalEmails.sendTransacEmail({
        sender: { email: senderEmail, name: SENDER_NAME },
        to: [to],
        subject,
        htmlContent,
      });

    const promises = [];
    if (ownerRecipient) promises.push(send(ownerRecipient));
    if (customerRecipient) promises.push(send(customerRecipient));

    await Promise.all(promises);
  } catch (err) {
    const details = {
      message: err?.message,
      statusCode: err?.statusCode,
      body: err?.body,
    };
    console.error("Brevo sendBookingEmail failed:", details);
    throw err;
  }
};
