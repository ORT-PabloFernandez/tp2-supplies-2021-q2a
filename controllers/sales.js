const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSalesById(id){
    return sales.getSalesById(id);
}

async function getSalesByPurchaseMethod(pm){
    return sales.getSalesByPurchaseMethod(pm);
}

async function getSalesFromCustomerByEmail(email){
    return sales.getSalesFromCustomerByEmail(email);
}

async function getSalesByLowRate(sat){
    return sales.getSalesByLowRate(sat);
}

module.exports = {getSales, getSalesById, getSalesByPurchaseMethod, getSalesFromCustomerByEmail, getSalesByLowRate};