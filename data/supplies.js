const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';

const objectId = require('mongodb').ObjectId




async function getAllSales() {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find()
        .toArray();
    return supplies;
}

//get sale por id
async function getOneSale(id) {
    const connectiondb = await conn.getConnection();
    const sale = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ _id: new objectId(id) })
        .toArray();
    return sale;
}

//get sale por puchase method
async function getPurchaseMethod(method) {
    const connectiondb = await conn.getConnection();
    const salesXmethod = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ "purchaseMethod": method })
        .toArray();
    return salesXmethod;
}

// get compras por cliente por mail
async function getClientePorMail(mail) {
    const connectiondb = await conn.getConnection();
    const comprasClienteXMail = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ "customer.email": mail })
        .toArray();
    return comprasClienteXMail;
}

// get compras por cliente por mail
async function getClientesInsatifechos(tope) {
    const connectiondb = await conn.getConnection();
    const clientesInsatifechos = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ "customer.satisfaction": { $lte: parseInt(tope) } })
        .toArray();

    return clientesInsatifechos;
}

// total ventas por geo
async function getVentasPorGeo(geo) {
   
    const connectiondb = await conn.getConnection();
    const ventasPorGeo = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ storeLocation: geo })
        .toArray();
    
    let sumaTotal = 0;
    for (let i = 0; i < ventasPorGeo.length; i++ ) {
        const venta = ventasPorGeo[i]
        venta.items.forEach(item => {
            sumaTotal = sumaTotal + parseFloat(item.price)
            console.log(parseFloat(item.price))
            console.log(sumaTotal)
        })
    }    
       

    return {
        'Nombre de la Localidad': geo,
        'Total ventas': sumaTotal,       
    }
}

// total ventas por geoV2
async function getVentasPorGeoV2(geo) {    
    const ventas = await getAllSales();
    const listaVentasPorLocalidad = ventas.filter((ventas) => ventas.storeLocation == geo);

    let sumaTotal = 0;
    for (let i = 0; i < listaVentasPorLocalidad.length; i++) {
        const venta = listaVentasPorLocalidad[i];
        venta.items.forEach(item => {
            sumaTotal = sumaTotal + parseFloat(item.price)
            console.log(parseFloat(item.price))
            console.log(sumaTotal)
        })
    }
    return {
        'Nombre de la Localidad': geo,
        'Total ventas': sumaTotal
    }
}

// listado por geo
async function getListadoPorGeo(geo) {
    const connectiondb = await conn.getConnection();
    const listadoPorGeo = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ storeLocation: geo })
        .toArray();

    return listadoPorGeo;
}



module.exports = { getAllSales, getOneSale, getPurchaseMethod, getClientePorMail, 
    getClientesInsatifechos, getVentasPorGeo, getListadoPorGeo, getVentasPorGeoV2 };