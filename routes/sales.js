const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

//get sale por ID
router.get('/:id', async (req, res) => {
    console.log("check");
    res.json(await controller.getOneSale(req.params.id));
})

//get sale por purchaseMethod
router.get('/purchaseMethod/:purchaseMethod', async (req, res) => {
    console.log("check");
    res.json(await controller.getPurchaseMethod(req.params.purchaseMethod));
})

// get compras por cliente por mail
router.get('/clientePorMail/:mail', async (req, res) => {
    console.log("check");
    res.json(await controller.getClientePorMail(req.params.mail));
})

// get clientes insatisfechos >3
router.get('/clientesInsatifechos/:tope', async (req, res) => {
    console.log("check");
    res.json(await controller.getClientesInsatifechos(req.params.tope));
})

// get total de ventas por geolizacion
router.get('/ventasPorGeo/:geo', async (req, res) => {
    console.log("check");
    res.json(await controller.getVentasPorGeo(req.params.geo));
})

// get listado por Geo
router.get('/listadoPorGeo/:geo', async (req, res) => {
    console.log("check");
    res.json(await controller.getListadoPorGeo(req.params.geo));
})

// get total de ventas por geolizacion v2
router.get('/ventasPorGeoV2/:geo', async (req, res) => {
    console.log("check");
    res.json(await controller.getVentasPorGeoV2(req.params.geo));
})




module.exports = router;