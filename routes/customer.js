const express = require("express");
const router = express.Router();
const controller = require("../controllers/customer");

router.get("/:email", async (req, res) => {
  const customerEmail = req.params.email;
  const customer = await controller.getCustomerByEmail(customerEmail);
  res.json(customer);
});

router.get("/unsatisfied", async (req, res) => {
  const unsatisfied = await controller.getUnsatisfiedCustomers();
  res.send(unsatisfied);
});

module.exports = router;
