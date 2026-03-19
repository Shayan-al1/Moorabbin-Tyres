import Booking from "../models/Booking.js";
import { sendBookingEmail } from "../services/emailService.js";

export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    await sendBookingEmail(booking);

    res.status(201).json({
      message: "Booking created successfully",
      booking
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
