const express = require("express");
const Product = require("../../models/ProductsModal");

const router = express.Router();

router.get("/", (req, res) => {
  Product.find().then(item => res.json(item));
});

router.post("/add_product", (req, res) => {
  let newproduct = { ...req.body };

  const product = new Product(newproduct);
  product.save().then(p => res.json(p));
});

module.exports = router;
