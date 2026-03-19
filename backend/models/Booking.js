import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    email: {
      type: String
    },

    vehicleType: {
      type: String,
      required: true
    },

    tyreService: {
      type: String,
      required: true,
      enum: [
        "Tyre Replacement",
        "Wheel Alignment",
        "Wheel Balancing",
        "Puncture Repairs",
        // "Steering & Suspension Repair",
        "Wheel & Tyre Fixing",
        "Other"
      ]
    },

    otherServiceText: {
      type: String
    },

    date: {
      type: String,
      required: true
    },

    time: {
      type: String,
    },

    status: {
      type: String,
      default: "pending",
      enum: ["pending", "in-progress", "completed"]
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Booking", bookingSchema);