const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req, res) => {
 const sale = await controller.getPorId(req.params.id);
 res.json(sale);
})

router.get('/purchaseMethod/:venta', async (req, res) => {
    console.log(req.params.venta);
    const sale = await controller.getPorVenta(req.params.venta);
    res.json(sale);
})

router.get('/email/:email', async (req, res) => {
    const sale = await controller.getPorMail(req.params.email);
    res.json(sale);
})

router.get('/porSatisfaction/:satisfaction', async (req,res) => {
    const sale = await controller.getPorSatis(req.params.satisfaction);
    res.json(sale)
})

router.get('/porLocalidad/:localidad', async (req,res) => {
    const sale = await controller.getPorLocalidad(req.params.localidad);
    res.json(sale)
})

module.exports = router;