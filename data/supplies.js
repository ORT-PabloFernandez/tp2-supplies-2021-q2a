const { ObjectId } = require('bson');
const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';


async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

// 1. Necesitamos un endpoint que nos devuelva una venta particular por _id
async function getSaleById(id){
    const connectiondb = await conn.getConnection();
    const mySale = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({_id: new ObjectId(id)});
    return mySale;
}

// 2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra (purchaseMethod), que pueden ser: Phone, Online, In store... 
async function getSalesByPurchaseMethod(myPM){
    const connectiondb = await conn.getConnection();
    const mySales = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({purchaseMethod: myPM})
                        .toArray();
    return mySales;
}

// 3. Necesitamos un endpoint que nos devuelva las compras de un cliente **customner** por email
async function getSalesByCustomerEmail(myEmail){
    const connectiondb = await conn.getConnection();
    const mySales = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.email" : myEmail})
                        .toArray();
    return mySales;
}

// 4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)
async function getUnsatisfiedCustomers(myNumber){
    const connectiondb = await conn.getConnection();
    const myCustomers = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.satisfaction" : {$lt : parseInt(myNumber)}})
                        .toArray();
    return myCustomers;
}

// 5. Generar un endpoint para obtener el importe total de la venta por **localizacion**
async function getTotalAmountSalesByLocation(myLocation){
    const connectiondb = await conn.getConnection();
    const mySales = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({storeLocation : myLocation})
                        .toArray();
    return mySales;
}

module.exports = {getAllSales, getSaleById, getSalesByPurchaseMethod, getSalesByCustomerEmail, getUnsatisfiedCustomers, getTotalAmountSalesByLocation};