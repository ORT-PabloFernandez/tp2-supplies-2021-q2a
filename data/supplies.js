const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const ObjectId = require('mongodb').ObjectId;;
const NivelSatisfaccion = 3;

async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

async function getSale(id){
    const connectiondb = await conn.getConnection();
    console.log(`en Supplies busco id = ${id}`);
    const sale = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .findOne({_id: new ObjectId(id)});
    return sale;
}

async function getSalesByMethod(metodoCompra) {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                    .db(DATABASE)
                     .collection(SALES)
                    .find({ 'purchaseMethod': metodoCompra })
                     .toArray();
    return supplies;
}

async function getSalesByEmail(email) {
    console.log(email);
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ 'customer.email': email })
        .toArray();
    return supplies;
}

async function getSalesClientesInsatisfechos() {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ 'customer.satisfaction': { $lt: NivelSatisfaccion } })
        .toArray();
    return supplies;
}

module.exports = {getAllSales,getSale,getSalesByMethod,getSalesByEmail,getSalesClientesInsatisfechos};