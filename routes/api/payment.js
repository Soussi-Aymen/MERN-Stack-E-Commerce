const express = require("express");
const Payment = require("../../models/ClientModal");
const Joi = require("joi");

const router = express.Router();

router.get("/", (req, res) => {
  Payment.find().then(item => res.json(item));
});

router.post("/add_payment", (req, res) => {
  /*const { error } = validate(req.body);
  if (error) {
    return res.status(404).send(error.details[0].message);
  }*/
  let newPayment = { ...req.body };
  const payment = new Payment(newPayment);
  payment.save().then(p => res.json(p));
});

/*function validate(payment) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(15)
      .regex(/\D/)
      .required(),
    adress: Joi.string(),
    cardHolder: Joi.string(),
    cvc: Joi.number(),
    email: Joi.string()
      .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      .required(),
    expMonth: Joi.number()
      .min(1)
      .max(12),
    expYear: Joi.number()
      .min(2019)
      .max(2029),
    paymentTotal: Joi.number(),
    telephone: Joi.number()
  };
  return Joi.validate(payment, schema);
}
*/
module.exports = router;
