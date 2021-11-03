const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSaleById(id){
    return sales.getSaleById(id);
}

async function getSalesByMethod(method){
    return sales.getSalesByMethod(method);
}

async function getSalesForCustommer(email){
    return sales.getSalesForCustommer(email);
}

async function getImporteForLocation(localizacion){
    const ventasPorLocalizacion = await sales.getSalesByLocation(localizacion)
    const importe = await ventasPorLocalizacion.reduce((acum, sale) => acum + sale.items.reduce((acc, item) => acc + item.price.$numberDecimal,0), 0);
    return importe
}

module.exports = {getSales, getSaleById, getSalesByMethod, getSalesForCustommer, getImporteForLocation};