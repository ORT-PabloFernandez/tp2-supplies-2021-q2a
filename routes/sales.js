const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req, res) => {
    const sales = await controller.getSles(req.params.id);
    res.json(sales);
 });
  
router.get('/getSalesMethod/:method', async (req, res) => {
 let method = req.params.method;
  res.json(await controller.getSalesMethod(method));
 });
  
router.get('/getSalesMail/:email', async (req, res) => {
 let email = req.params.email;
  res.json(await controller.getSalesMail(email));
 });

 router.get('/getSalesSatis/satis', async (req, res) => {
     res.json(await controller.getSalesSatis());
    });

    router.get('/getSalesTotal/:locacion', async (req, res) => {
     let locacion = req.params.locacion; 
       res.json(await controller.getSalesTotal(locacion));
    });
     

module.exports = router;