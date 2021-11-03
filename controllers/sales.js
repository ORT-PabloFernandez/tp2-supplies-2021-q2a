const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSaleById(id){
    return sales.getSaleById(id);
}

async function getSalesByPurchaseMethod(filter){
    return sales.getSalesByFilter(filter);
}

async function getSalesByUserEmail(email){
    return sales.getSalesByUserEmail(email);
}

async function unsatisfiedUsers(){
    return sales.unsatisfiedUsers();
}

module.exports = {getSales, getSaleById, getSalesByPurchaseMethod, getSalesByUserEmail, unsatisfiedUsers};