const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: { type: String, required: true },
  reference: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  total: { type: Number, required: true },
  instock: Number,
  bought: { type: Number, default: 0 },
  date: { type: Date, default: Date.now }
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
