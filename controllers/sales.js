const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getOneSale(id){    
    return sales.getOneSale(id);
}

async function getPurchaseMethod(method){    
    return sales.getPurchaseMethod(method);
}

async function getClientePorMail(mail){    
    return sales.getClientePorMail(mail);
}

async function getClientesInsatifechos(tope){    
    return sales.getClientesInsatifechos(tope);
}

async function getVentasPorGeo(geo){    
    return sales.getVentasPorGeo(geo);
}

async function getListadoPorGeo(geo){    
    return sales.getListadoPorGeo(geo);
}

async function getVentasPorGeoV2(geo){    
    return sales.getVentasPorGeoV2(geo);
}



module.exports = {getSales, getOneSale, getPurchaseMethod, getClientePorMail , 
    getClientesInsatifechos, getVentasPorGeo, getListadoPorGeo, getVentasPorGeoV2};