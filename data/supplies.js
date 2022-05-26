const res = require('express/lib/response');
const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const objectId = require('mongodb').ObjectId;

async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

async function getPorId(id){
    const connectiondb = await conn.getConnection();
    const xId = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .find({_id: new objectId(id)})
                    .toArray();
    return xId;
}

async function getPorVenta(venta){
    const supplies = await getAllSales();
    const respuesta = supplies.filter(
      (ventas) => ventas.purchaseMethod === venta
    );
    return respuesta;
}

async function getPorMail(email){
    const todos = await getAllSales();
    const respuesta = todos.filter(
        (mails) => mails.customer.email === email
    );
    return respuesta;
}

async function getPorSatis(satisfaction){
    const todos = await getAllSales();
    const respuesta = todos.filter(
        (ventas) => ventas.customer.satisfaction < satisfaction
    );
    return respuesta;
}

async function getPorLocalidad(localidad){
    const todos = await getAllSales();
    const xlocalidad = todos.filter(
        (ventas) => ventas.storeLocation === localidad
    )
    let suma = 0;
    for (let index = 0; index < xlocalidad.length; index++) {
        const element = xlocalidad[index];
        element.items.forEach((element) => {
            suma += parseFloat(element.price) * element.quantity;
        });
        
    }
    return suma;
}


module.exports = {getAllSales, getPorId,getPorVenta, getPorMail,getPorSatis,getPorLocalidad};