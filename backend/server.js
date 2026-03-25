import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

import connectDB from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";

// Resolve .env next to this file so it loads even when the app is started from the repo root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

connectDB();

// app.use(cors());
app.use(cors({
  origin: [
    "https://tyre-frontend.onrender.com",
    "https://www.moorabbintyres.com",
    "https://moorabbin​tyres.com",
    "http://localhost:5173"
  ],
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.json());

app.use("/api", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Tyre Booking API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
