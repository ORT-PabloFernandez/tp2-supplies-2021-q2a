const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSalePorId (_id) {
    return sales.getSalePorId(_id);
}

async function getListaVentasPorMetodoCompra(metodo){
    return sales.getListaVentasPorMetodoCompra(metodo)
}

async function getComprasPorClienteByEmail(mail){
    return sales.getComprasPorClienteByEmail(mail)
}

async function getClientesInsatisfechos(){
    return sales.getClientesInsatisfechos() 
}


module.exports = {getSales,getSalePorId,getListaVentasPorMetodoCompra,getComprasPorClienteByEmail,getClientesInsatisfechos};