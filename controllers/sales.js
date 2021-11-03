const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

//ejercicio1
async function getSaleById(id){    
    return sales.getSaleById(id);
}

//ejercicio2
async function getSalesByPurchase(pMethod){    
    return sales.getSaleByPurchase(pMethod);
}

//ejercicio3
async function getPurchaseByEmail(email){    
    return sales.getPurchaseByEmail(email);
}

//ejercicio4
async function getDissatisfiedCustomer(){    
    
    let sales = await sales.getAllSales()
                .filter((sale) =>{
                   let sale = sale.client.satisfaction < 3;
                    return sale.client;
                 })
                .toArray;
   
    return sales;
    
}

module.exports = {getSales,getSaleById,getSalesByPurchase,getPurchaseByEmail};


