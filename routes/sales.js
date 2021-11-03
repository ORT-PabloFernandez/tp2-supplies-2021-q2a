const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

//> 1. Necesitamos un endpoint que nos devuelva una venta particular por _id
router.get('/:id', async (req, res) => {
    res.json(await controller.getSalesById(req.params.id))
})

//> 2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra (purchaseMethod), que pueden ser: Phone, Online, In store...
router.get('/method/:pm', async (req, res) => {
    res.json(await controller.getSalesByPurchaseMethod(req.params.pm))
})

//> 3. Necesitamos un endpoint que nos devuelva las compras de un cliente **customner** por email
router.get('/email/:email', async (req, res) => {
    res.json(await controller.getSalesFromCustomerByEmail(req.params.email))
})

//> 4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)
//Variante 1
router.get('/lowCal', async (req, res) => {
    const cal = 3;
    res.json(await controller.getSales().filter(customer => customer.satisfaction < cal))
})
//Variante 2
router.get('/lowSat', async (req, res) => {
    const sat = 3;
    const satString = sat.toString();
    res.send(await controller.getSalesByLowRate(satString))
})

//Para elegir con que grado de satisfaccion filtrar
router.get('/sat/:sat', async (req, res) => {
    res.json(await controller.getSalesByLowRate(req.params.sat))
})

module.exports = router;