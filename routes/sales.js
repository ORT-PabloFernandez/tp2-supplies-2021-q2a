const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

/*router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});*/

router.get('/', async (req, res) => {
    console.log("check: " +req.query.purchaseMethod);
    if(req.query.purchaseMethod != undefined){
        console.log("purchaseMethod: " +req.query.purchaseMethod);
        res.json(await controller.getSalesByPurchaseMethod(req.query.purchaseMethod));
    }
    else{
        console.log("searching all sales");
        res.json(await controller.getSales());
    }
});

router.get('/customer/insatisfechos', async (req, res) => {
    console.log("check: clientes insatisfechos");
    res.json(await controller.getClientesInsatisfechos());
});

router.get('/customer/:email', async (req, res) => {
    console.log("check customer by email: " + req.params.email);
    res.json(await controller.getSalesByCustomerEmail(req.params.email));
});


router.get('/:id', async (req, res) => {
    console.log("check id: " + req.params.id);
    res.json(await controller.getSaleById(req.params.id));
});


module.exports = router;