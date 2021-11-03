const { Router } = require('express');
const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

// 1. Necesitamos un endpoint que nos devuelva una venta particular por _id
router.get("/:id", async (req, res) => {
    console.log("Obteniendo una venta por id:");
    res.json(await controller.getSaleById(req.params.id));
});

// 2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra (purchaseMethod), que pueden ser: Phone, Online, In store... 
router.get("/searchByPM/:myPM", async (req, res) => {
    console.log("Obteniendo las ventas por el método de compra:");
    res.json(await controller.getSalesByPurchaseMethod(req.params.myPM));
});

// 3. Necesitamos un endpoint que nos devuelva las compras de un cliente **customner** por email
router.get("/searchByEmail/:myEmail", async (req, res) => {
    console.log("Obteniendo las ventas de un cliente por email:");
    res.json(await controller.getSalesByCustomerEmail(req.params.myEmail));
});

// 4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)
router.get("/unsatisfiedCustomers/:myNumber", async (req, res) => {
    console.log("Obteniendo los clientes insatisfechos:");
    res.json(await controller.getUnsatisfiedCustomers(req.params.myNumber));
});

// 5. Generar un endpoint para obtener el importe total de la venta por **localizacion**
// Lamentablemente no pude terminarlo, no me dio el tiempo y aunque sea lo dejé para que liste todas las ventas de una localizacion en particular
router.get("/totalAmountByLocation/:myLocation", async (req, res) => {
    console.log("Obteniendo el importe total de la venta por localizacion:");
    const mySales = await controller.getTotalAmountSalesByLocation(req.params.myLocation);
    res.json(await controller.getTotalAmountSalesByLocation(req.params.myLocation));
});

module.exports = router;