const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSale(id){    
    return sales.getSale(id);
}

async function getSalesByMethod(metodoCompra) {
    return sales.getSalesByMethod(metodoCompra);
}

async function getSalesByEmail(email) {
    return sales.getSalesByEmail(email);
}

async function getSalesClientesInsatisfechos() {
    return sales.getSalesClientesInsatisfechos();
}


module.exports = {getSales,getSale,getSalesByMethod,getSalesByEmail,getSalesClientesInsatisfechos};