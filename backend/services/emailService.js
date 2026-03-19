import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const requiredEnv = ["EMAIL_USER", "EMAIL_PASS", "OWNER_EMAIL"];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);

if (missingEnv.length) {
  throw new Error(
    `Missing required email environment variables: ${missingEnv.join(", ")}`
  );
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendBookingEmail = async (booking) => {
  const message = `
New Tyre Service Booking

Name: ${booking.name}
Phone: ${booking.phone}
Email: ${booking.email || "N/A"}

Vehicle: ${booking.vehicleType}
Service: ${booking.tyreService}
${
  booking.tyreService === "Other" && booking.otherServiceText
    ? `Other Service: ${booking.otherServiceText}`
    : ""
}

Date: ${booking.date}
Time: ${booking.time}

Status: ${booking.status}
`.trim();

  try {
    await transporter.sendMail({
      from: `Tyre Service <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      replyTo: booking.email || undefined,
      subject: "New Tyre Service Booking",
      text: message
    });
  } catch (error) {
    console.error("Failed to send booking email", error);
    throw new Error("Unable to send booking email");
  }
};
