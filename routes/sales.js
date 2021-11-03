const express = require('express');
const app = require('../app');
const router = express.Router();
const controller = require('../controllers/sales');

const DISSATISFIED = 3;


router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req, res) => {
    let {id} = req.params;
    let sales = await controller.getSales();
    let searchedSale = sales.filter(sale => sale._id == id);
    if(!searchedSale) return res.status(400).end();
    res.json(searchedSale);
})

router.get('/method/:method', async (req, res) => {
    let {method} = req.params;
    let sales = await controller.getSales();
    let filteredMethod = sales.filter(sale => sale.purchaseMethod == method);
    if (!filteredMethod) return res.status(404).send("Not found").end()
    res.json(filteredMethod);
})

router.get('/customer/:email', async (req, res) => {
    let {email} = req.params;
    let sales = await controller.getSales();
    let customersPurchase = sales.filter(sale => sale.customer.email == email);
    if (!customersPurchase) return res.status(404).send("Not found").end()
    res.json(customersPurchase);
})

router.get('/customers/dissatisfied/', async (req, res) => {
    let sales = await controller.getSales();
    let customersDissatisfied = sales.filter(sale => sale.customer.satisfaction < DISSATISFIED);
    if (!customersDissatisfied) return res.status(404).send("Not found").end()
    res.json(customersDissatisfied);
})

router.get('/accountant/totalSales/:storeLocation', async (req, res) => {
    let sales = await controller.getSales();
    let salesByZone = sales.filter(sale => sale.storeLocation == storeLocation)
    if (!salesByZone) return res.status(404).send("Not found").end()
    totalSales = salesByZone.reduce((acc, current) => {
        return {total: (acc.items.price * acc.items.quantity) + (current.items.price * current.items.quantity)}
    })
    res.json(totalSales);
} )   






module.exports = router;