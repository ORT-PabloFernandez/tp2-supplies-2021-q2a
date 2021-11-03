const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");

    try {
        let { method } = req.query;
        if (!method) return res.json(await controller.getSales());

        let byMethod = await controller.getSalesByMethod(method);
        if (byMethod.length === 0) return res.status(404).json([]);

        res.json(byMethod);
    } catch (error) {
        res.status(500).json([]);
    }
});

router.get('/:id', async (req, res) => {
    console.log("check");
    let { id } = req.params;

    try {
        let sale = await controller.getSaleById(id);
        if (!sale) return res.status(404).json({});

        res.json(sale);
    } catch (error) {
        return res.status(500).json({});
    }
});

router.get('/customer/satisfaction', async (req, res) => {
    console.log("check");

    try {
        let unsatisfied = await controller.getSalesByUnsatisfiedCustomers();
        if (unsatisfied.length === 0) return res.status(404).json([]);

        res.json(unsatisfied);
    } catch (error) {
        res.status(500).json([]);
    }
});

router.get('/customer/:email', async (req, res) => {
    console.log("check");
    let { email } = req.params;
    if (!email) return res.status(400).json([]);

    try {
        let byCustomer = await controller.getSalesByCustomerEmail(email);
        if (byCustomer.length === 0) return res.status(404).json([]);

        res.json(byCustomer);
    } catch (error) {
        res.status(500).json([]);
    }
});

router.get('/locations/totals', async (req, res) => {
    console.log("check");

    try {
        let totalsByLocation = await controller.getTotalsByLocation();
        if (totalsByLocation.length === 0) return res.status(404).json([]);

        res.json(totalsByLocation);
    } catch (error) {
        res.status(500).json([]);
    }
});

module.exports = router;