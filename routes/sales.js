const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    res.json(await controller.getOneSale(id));
});

router.get('/method/:method', async (req, res) => {
    const { method } = req.params;
    res.json(await controller.getSalesByMethod(method)); 
});

router.get('/customer/unsatisfied', async (req, res) => {
    res.json(await controller.getUnsatisfied());
});

router.get('/customer/:email', async (req, res) => {
    const { email } = req.params;
    res.json(await controller.getSaleByEmail(email));
});

router.get('/location/:location/total', async (req, res) => {
    const { location } = req.params;
    const all = await controller.getSalesByLocation(location);

    const total = all.map(sell => sell.items.reduce((previousValue, item) => previousValue + item.price.$numberDecimal))
    const allTotal = total.reduce((previousValue, currentValue) => previousValue + currentValue)

    res.json({location, total: allTotal});
});

router.get('/location/:location', async (req, res) => {
    const { location } = req.params;
    res.json(await controller.getSalesByLocation(location));
});

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

module.exports = router;