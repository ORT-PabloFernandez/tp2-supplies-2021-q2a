const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req, res) => {
    res.json(await controller.getSaleById(req.params.id));
});

router.get('/filter/:filter', async (req, res) => {
    const filteredSales = await controller.getSalesByPurchaseMethod(req.params.filter.toString());
    res.send(filteredSales);
  });

router.get('/usersales/:email', async (req, res) => {
    const userSales = await controller.getSalesByUserEmail(req.params.email);
    res.send(userSales);
})

router.get('/unsatisfiedusers', async (req, res) => {
    const unsatisfiedUsers = await controller.unsatisfiedUsers();
    res.send(unsatisfiedUsers);
})

module.exports = router;