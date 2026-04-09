const express = require("express");
const router = express.Router();

const { processPayment } = require("../controllers/paymentController");
const { protect } = require("../middleware/authMiddleware");

// Protected route
router.post("/pay", protect, processPayment);

module.exports = router;