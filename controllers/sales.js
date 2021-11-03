const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSaleById(id){    
    return sales.getSaleById(id);
}

async function getSalesByPurchaseMethod(myPM){
    return sales.getSalesByPurchaseMethod(myPM);
}

async function getSalesByCustomerEmail(myEmail){
    return sales.getSalesByCustomerEmail(myEmail);
}

async function getUnsatisfiedCustomers(myNumber){
    return sales.getUnsatisfiedCustomers(myNumber);
}

async function getTotalAmountSalesByLocation(myLocation){
    return sales.getTotalAmountSalesByLocation(myLocation);
}

module.exports = {getSales, getSaleById, getSalesByPurchaseMethod, getSalesByCustomerEmail, getUnsatisfiedCustomers, getTotalAmountSalesByLocation};