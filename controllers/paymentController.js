const Payment = require("../models/Payment");

exports.processPayment = async (req, res) => {
  const { amount } = req.body;

  const status = Math.random() > 0.3 ? "success" : "failure";

  const payment = await Payment.create({
    user: req.user.id,
    amount,
    status,
  });

  res.json({
    message: "Payment processed",
    status,
    payment,
  });
};