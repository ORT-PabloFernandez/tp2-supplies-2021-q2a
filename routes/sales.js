const express = require("express");
const router = express.Router();
const controller = require("../controllers/sales");
const data = require(".././data/supplies");

router.get("/", async (req, res) => {
  console.log("check");
  res.json(await controller.getSales());
});

router.get("/:id", async (req, res) => {
  const sale = await data.getSalesByid(req.params.id);
  res.json(sale);
});

router.get("/purchaseMethod/:purchaseMethod", async (req, res) => {
  console.log(req.params.purchaseMethod);
  const sale = await data.getSalesByPm(req.params.purchaseMethod);
  res.json(sale);
});

router.get("/email/:email", async (req, res) => {
  const sales = await data.getSalesByEmail(req.params.email);
  res.json(sales);
});

router.get("/unsatisfiedCustomers/3", async (req, res) => {
  const customers = await data.getUnstatifiedCustomers();
  res.json(customers);
});

router.get("/storeLocation/:storeLocation", async (req, res) => {
  console.log(req.params.storeLocation);
  const sales = await data.salesXLocation(req.params.storeLocation);
  res.json(sales);
});

module.exports = router;
