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
        .find({ purchaseMethod: method })
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
    let sumaTotal = 0;
    const connectiondb = await conn.getConnection();
    const ventasPorGeo = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ storeLocation: geo })
        .forEach(sale => {
            sale.items.forEach(item => {
                sumaTotal = sumaTotal + parseInt(item.price)
                console.log(sumaTotal)
            })
        })
    //.toArray();

    return {
        'Nombre de la Localidad': geo,
        'Total ventas': sumaTotal
    }
}



module.exports = { getAllSales, getOneSale, getPurchaseMethod, getClientePorMail, getClientesInsatifechos, getVentasPorGeo };