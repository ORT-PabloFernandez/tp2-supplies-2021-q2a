const express = require("express");
const router = express.Router();
const controller = require("../controllers/sales");

router.get("/", async (req, res) => {
  console.log("check!");
  res.json(await controller.getSales());
});

//queryString buscar por id , uso localhost:3000/api/sales/ventas?id=5bd761dcae323e45a93cd01b , pero no se por que no devuelve

router.get("/", async (req, res) => {
  console.log("check");
  console.log(req.query.id);

  const ventas = await controller.getSales();

  res.json(ventas.find((venta) => venta._id === req.query.id));
});

//consulta con queryString ,buscar por email
router.get("/email", async (req, res) => {
  res.json(
    await controller
      .getSales()
      .filter((user) => user.email === req.query.identificador)
  );
});

//clientes insatisfechos
router.get("/clientesInsatisfechos", (req, res) => {
  res.json(
    controller.getSales().filter((user) => user.customer.satisfaction < 3)
  );
});

module.exports = router;
