const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  adress: { type: String, required: true },
  cardHolder: String,
  cvc: Number,
  email: { type: String, required: true },
  expMonth: Number,
  expYear: Number,
  telephone: { type: Number, required: true },
  paymentTotal: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Payment = mongoose.model("paymentClient", paymentSchema);

module.exports = Payment;
