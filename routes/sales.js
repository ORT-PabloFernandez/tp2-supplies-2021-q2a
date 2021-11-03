const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

//ejercicio1
router.get('/sale/:id', async (req, res) => {
    console.log("check");
    res.json(await controller.getSaleById(req.params.id));
});

//ejercicio2
router.get('/purchase/:purchaseMethod', async (req, res) => {
    console.log("check");
    res.json(await controller.getSalesByPurchase(req.params.purchaseMethod));
});

//ejercicio3
router.get('/purchase/:purchaseMethodByEmail', async (req, res) => {
    console.log("check");
    res.json(await controller.getPurchaseByEmail(req.params.purchaseMethodByEmail));
});

//ejercicio4
router.get('/customers/:dissatisfied', async (req, res) => {
    console.log("check");
    res.json(await controller.getDissatisfiedCustomer(req.params.dissatisfied));
});

module.exports = router;