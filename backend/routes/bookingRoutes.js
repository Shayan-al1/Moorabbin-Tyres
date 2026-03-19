import express from "express";
import {
  createBooking,
  getBookings,
  updateBookingStatus,
  deleteBooking
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/bookings", createBooking);
router.get("/bookings", getBookings);
router.put("/bookings/:id", updateBookingStatus);
router.delete("/bookings/:id", deleteBooking);

export default router;
