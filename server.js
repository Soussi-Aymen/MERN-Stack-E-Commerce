const express = require("express");
const mongoose = require("mongoose");
const dataBase = require("./config/DB");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const app = express();

const products = require("./routes/api/products");
const payment = require("./routes/api/payment");

mongoose.connect(dataBase.DB).then(
  () => {
    console.log("Connected to MongoDB...");
  },
  err => {
    console.log("Can not connect to the database" + err);
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.use("/products", products);
app.use("/payments", payment);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
