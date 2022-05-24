const express = require("express");
const { route } = require("express/lib/router");
const router = express.Router();
const controller = require("../controllers/sales");

router.get("/", async (req, res) => {
  console.log("check");
  res.json(await controller.getSales());
});

router.get("/:id", async (req, res) => {
  const respuesta = await controller.getVentaId(req.params.id);
  res.json(respuesta);
});

router.get("/purchaseMethod/:venta", async (req, res) => {
  const respuesta = await controller.getPorVenta(req.params.venta);
  res.json(respuesta);
});

router.get("/porEmail/:email", async (req, res) => {
  const respuesta = await controller.getPorEmail(req.params.email);
  res.json(respuesta);
});

router.get("/porInsatisfechos/numero", async (req, res) => {
  const respuesta = await controller.getInsatisfechos();
  res.json(respuesta);
});

router.get("/porLocalida/:localidad", async (req, res) => {
  const respuesta = await controller.getLocalidad(req.params.localidad);
  //   console.log(parseFloat(respuesta[0].items[0].price));
  console.log(respuesta);
  res.json({ Title: "el total es de ", number: parseInt(respuesta) });
});

module.exports = router;
