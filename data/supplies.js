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

async function getSalesById(id){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({_id: new ObjectId(id)});                      
    return supplies;
}

async function getSalesByPurchaseMethod(pm){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({purchaseMethod: pm})
                        .toArray();                       
    return supplies;
}

async function getSalesFromCustomerByEmail(email){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({'customer.email': email})
                        .toArray();                    
    return supplies;
}

async function getSalesByLowRate(sat){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({'customer.satisfaction': {$lt: parseInt(sat)}})
                        .toArray();                    
    return supplies;
}

module.exports = {getAllSales, getSalesById, getSalesByPurchaseMethod, getSalesFromCustomerByEmail, getSalesByLowRate};