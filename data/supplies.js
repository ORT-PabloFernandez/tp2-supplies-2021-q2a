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

async function getSaleById(id){
    const connectiondb = await conn.getConnection();
    const sale = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({_id: new ObjectId(id)});

    return sale;                    
}


async function getSalesByMethod(method){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({purchaseMethod: method})
                        .toArray();

    return sales;
}

async function getSalesForCustommer(emailSearch){
    const sales = await getAllSales()
    const salesFiltered = sales.filter(sale => sale.customer.email === emailSearch);
    /*const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({customer: {email: emailSearch}})
                        .toArray();
    */
    return salesFiltered;
}

async function getUsers(){
    const sales = await getAllSales()
    const users = sales.map((sale) => {return sale.customer});
    return users;
}

async function getSalesByLocation(localizacion){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({storeLocation: localizacion})
                        .toArray();
    
    return sales;
}

module.exports = {getAllSales, getSaleById, getSalesByMethod, getSalesForCustommer, getUsers, getSalesByLocation};