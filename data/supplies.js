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

async function getSaleById(id){
    const connectiondb = await conn.getConnection();
    const supply = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({"_id":id});
    return supply;

}

async function getSalesByPurchasedMethod(method){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"purchaseMethod": method})
                        .toArray();
    return supplies;

}

async function getSalesByCustomerEmail(email){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.email": email})
                        .toArray(); 
    return supplies;

}

async function getUnsatisfiedCustomers(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.satisfaction": { $lt: 3 }})
                        .toArray(); 
    return supplies;

}

async function getAllSalesByLocation(location){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"storeLocation": location})
                        .toArray(); 
    return supplies;

}

module.exports = { getAllSales, getSaleById, getSalesByPurchasedMethod, getSalesByCustomerEmail, getUnsatisfiedCustomers, getAllSalesByLocation};