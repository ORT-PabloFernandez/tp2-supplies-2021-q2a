const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSaleById(id){
    return sales.getSaleById(id);
}

async function getSalesByPurchaseMethod(pm){
    return sales.getAllSalesByPurchaseMethod(pm);
}

async function getSaleByCustomerEmail(email){
    return sales.getSaleByCustomerEmail(email);
}

async function getInsatisfiedCustomers(){
    return sales.getInsatisfiedCustomers();
}

async function getTotalAmountByLocation(location){
    return sales.getTotalAmountByLocation(location);
}

module.exports = {getSales, getSaleById, getSalesByPurchaseMethod, getSaleByCustomerEmail, getInsatisfiedCustomers, getTotalAmountByLocation};