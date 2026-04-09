console.log("🔥 SERVER FILE STARTED");

require("dotenv").config({ path: "./.env" });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/paymentRoutes"); // ✅ MOVE HERE

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test Route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes); // ✅ MOVE HERE

// Debug ENV
console.log("ENV:", process.env.MONGO_URI);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");

    app.listen(5000, () => {
      console.log("Server running on port 5000 🚀");
    });
  })
  .catch((err) => {
    console.log("MongoDB Error ❌:", err.message);
  });
const uploadRoutes = require("./routes/uploadRoutes");

app.use("/api/upload", uploadRoutes);