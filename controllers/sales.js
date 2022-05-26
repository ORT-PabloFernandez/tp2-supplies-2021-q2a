const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}
async function getPorId(id){
    return sales.getPorId(id);
}
async function getPorVenta(venta){
    return sales.getPorVenta(venta);
}
async function getPorMail(email){
    return sales.getPorMail(email);
}
async function getPorSatis(satisfaction){
    return sales.getPorSatis(satisfaction)
}

async function getPorLocalidad(localidad){
    return sales.getPorLocalidad(localidad)
}
module.exports = {getSales,getPorId,getPorVenta,getPorMail,getPorSatis,getPorLocalidad};