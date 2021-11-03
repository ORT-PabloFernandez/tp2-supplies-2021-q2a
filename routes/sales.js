const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');
const { getClientesInsatisfechos } = require('../data/supplies');


router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:_id',async (req,res)=>{
    console.log((req.params._id))
    res.json(await controller.getSalePorId((req.params._id)))
})

router.get('/ListaVentasPorMetodoCompra', async(req,res)=> {
    console('cargamos la lista')
    const order = req.query.order;
    let lista = controller.getListaVentasPorMetodoCompra(order)
    console.log(lista)
    res.json(lista)
})

router.get('/getComprasPorClienteByEmail', async (req,res)=>{
    console('cargamos la lista')
    const order = req.query.order
    res.json(getComprasPorClienteByEmail(order))
})

router.get('/getClientesInsatifechos', async (req,res)=>{
    res.json(getClientesInsatisfechos())
})


module.exports = router;