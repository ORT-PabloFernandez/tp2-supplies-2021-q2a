const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSaleById(id){    
    return sales.getSaleById(id);
}

async function getSalesByPurchaseMethod(purchaseMethod){
    var salesList = await sales.getAllSales();
    return salesList.filter(sale => sale.purchaseMethod === purchaseMethod)
}

async function getSalesByCustomerEmail(customerEmail){
    var salesList = await sales.getAllSales();
    return salesList.filter(sale => sale.customer.email === customerEmail)
}

async function getClientesInsatisfechos(){
    var salesList = await sales.getAllSales();
    return salesList.filter(sale => sale.customer.satisfaction < 3)
}

module.exports = {getSales,getSalesByPurchaseMethod, getSaleById, getSalesByCustomerEmail, getClientesInsatisfechos};