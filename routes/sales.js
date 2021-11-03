const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});


router.get('/email', async (req, res) => {
    console.log(`Getting sale with customer email: ${req.query.email}`);
    res.json(await controller.getSaleByCustomerEmail(req.query.email));
});

router.get('/method', async (req, res) => {
    console.log(`Getting sales filtered by purchased method: ${req.query.purchaseMethod}`);
    res.json(await controller.getSalesByPurchaseMethod(req.query.purchaseMethod));
})

router.get('/customers', async (req, res) => {
    console.log('Getting insatisfied clients');
    res.json(await controller.getInsatisfiedCustomers());
})
router.get('/location', async (req, res) => {
    console.log(`Getting total amount for ${req.query.location} store`);
    res.json(await controller.getTotalAmountByLocation(req.query.location));
})

router.get('/:id', async (req, res) => {
    console.log(`Getting sale with id: ${req.params.id}`);
    res.json(await controller.getSaleById(req.params.id));
});

module.exports = router;