const express = require("express");
const Product = require("../../models/ProductsModal");

const router = express.Router();

router.get("/", (req, res) => {
  Product.find().then(item => res.json(item));
});

router.post("/add_product", (req, res) => {
  let newproduct = { ...req.body };
  console.log(newproduct);
  const product = new Product(newproduct);
  product.save().then(p => res.json(p));
});

router.put("/modify_product/:id", (req, res) => {
  let modifyproduct = req.body;
  Product.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { ...modifyproduct } },
    (err, data) => {
      if (err) {
        throw err;
      } else {
        res.send("product was modified");
      }
    }
  );
});

module.exports = router;
