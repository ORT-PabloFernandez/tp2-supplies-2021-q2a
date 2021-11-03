const express = require("express");
const router = express.Router();
const controller = require("../controllers/sales");

router.get("/", async (req, res) => {
  res.json(await controller.getSales());
});

router.get("/:id", async (req, res) => {
  const saleId = req.params.id;
  const sale = await controller.getSaleById(saleId);
  res.json(sale);
});

router.get("/filter", async (req, res) => {
  const purchaseMethod = req.query.purchaseMethod;
  const filtered = await controller.getSalesByPurchaseMethod(purchaseMethod);
  res.json(filtered);
});


router.get("/:location/total", async (req, res) => {
  const location = req.params.location;
  const total = await controller.getTotalByLocation(location);
  res.json(total);
});

module.exports = router;
