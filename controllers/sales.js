const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSles(id){
    return sales.getSales(id)
}

async function getSalesMethod(method){
    let salesMethod = await sales.getAllSales()
    let prueba = salesMethod.filter(sales => sales.purchaseMethod == method)
    return prueba
} 

async function getSalesMail(email){
    let salesEmail = await sales.getAllSales() 
    let prueba = salesEmail.filter(sales => sales.customer.email == email)
    return prueba
} 

async function getSalesSatis(){
    let salesSatisfaccion = await sales.getAllSales() 
    let prueba = salesSatisfaccion.filter(sales => sales.customer.satisfaction < 3)
    return prueba
} 

async function getSalesTotal(locacion){
    let salesSatisfaccion = await sales.getAllSales() 
    let inicio = 0
    let prueba = salesSatisfaccion.filter(sales => sales.storeLocation == locacion)
    prueba.forEach(sale => {
        sale.items.forEach(item => {
            inicio += parseInt(item.price)
            
        });
    });

    return inicio
} 

module.exports = {getSales, getSles, getSalesMail, getSalesMethod, getSalesSatis, getSalesTotal};