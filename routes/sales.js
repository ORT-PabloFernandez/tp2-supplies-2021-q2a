const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    const datos = await controller.getSales()
    if(!req.query.purchaseMethod){
        return res.json(datos);
    }
    
    res.json(datos.filter(sale => sale.purchaseMethod == req.query.purchaseMethod))
});

router.get('/:id', async (req, res) => {
    console.log("check");
    res.json(await controller.getSaleById(req.params.id));    
});

router.get('/customer/:email', async (req, res) => {
    console.log("check");
    const datos = await controller.getSales()

    res.json(await datos.filter(sale => sale.customer.email == req.params.email));
});

router.get('/customer/satisfaction/:level', async (req, res) => {
    console.log("check");
    const datos = await controller.getSales()

    res.json(await datos.filter(sale => sale.customer.satisfaction < req.params.level));
});

router.get('/totalSales/:location', async (req, res) => {
    console.log("check");
    const location = req.params.location;
    const datos = (await controller.getSales()).filter(sale => sale.storeLocation == location)
    let total=0;
    
    for (let i = 0; i < datos.length; i++) {
        for (let j = 0; j < datos[i].items.length; j++) {
            let precio = datos[i].items[j].price;
            let cantidad = datos[i].items[j].quantity
            
            total += precio * cantidad;
        }    
    }

    res.json(total)

});


module.exports = router;