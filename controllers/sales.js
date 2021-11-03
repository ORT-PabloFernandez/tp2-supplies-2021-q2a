const sales = require('../data/supplies');

async function getSales(){    
    return await sales.getAllSales();
}

async function getSalesByMethod(method){    
    return await sales.getSalesByPurchasedMethod(method);
}

async function getOneSale(id){    
    return await sales.getSaleById(id);
}

async function getSaleByEmail(email){    
    return await sales.getSalesByCustomerEmail(email);
}

async function getUnsatisfied(email){    
    return await sales.getUnsatisfiedCustomers(email);
}

async function getSalesByLocation(location){    
    return await sales.getAllSalesByLocation(location);
}

module.exports = { getSales, getOneSale, getSalesByMethod, getSaleByEmail, getUnsatisfied, getSalesByLocation};