const express = require("express");
const router = express.Router();
const controller = require("../controllers/sales");

router.get("/", async (req, res) => {
  console.log("check!");
  res.json(await controller.getSales());
});

//consulta con queryString ,buscar por email
router.get("/email", async (req, res) => {
  const ventas = await controller.getSales();

  res.json(
    ventas.find((user) => user.customer.email == req.query.identificador)
  );
});

//clientes insatisfechos
router.get("/clientesInsatisfechos", async (req, res) => {
  const ventas = await controller.getSales();
  res.json(ventas.filter((user) => user.customer.satisfaction < 3));
});

router.get("/:id", async (req, res) => {
  console.log("check");
  console.log(req.query.id);

  const ventas = await controller.getSales();

  res.json(ventas.find((venta) => venta._id == req.params.id));
});

module.exports = router;
