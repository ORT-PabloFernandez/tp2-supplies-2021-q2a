const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
    const metodoCompra = req.query.method;
    console.log(metodoCompra);
    if(metodoCompra != undefined){
        return res.json(await controller.getSalesByMethod());
    }else{
        return res.json(await controller.getSales());
    }
});

router.get('/:id', async (req, res) => {
    console.log("check por ID");
    console.log(req.params.id);
    const miCliente = res.json(await controller.getSale(req.params.id));
    if(miCliente.length === 0){
        return res.status(312).send('No encontrado');
    }else res.json(miCliente);

});

router.get('/cliente/:email', async (req, res) => {
    console.log("check por Email");
    const miCliente = res.json(await controller.getSalesByEmail(req.params.email));
    if(miCliente.length === 0){
        return res.status(312).send('No encontrado');
    }else res.json(miCliente);
});

router.get('/cliente/satisfaction', async (req, res) => {
    console.log("check por Satisfaccion");
    const miCliente = res.json(await controller.getSalesClientesInsatisfechos(req.params.satisfaction));
    if(miCliente.length === 0){
        return res.status(312).send('No encontrado');
    }else res.json(miCliente);
});

module.exports = router;