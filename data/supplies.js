const conn = require('./conn');
const ObjectId = require('mongodb').ObjectId;
const DATABASE = 'sample_supplies';
const SALES = 'sales';


async function getAllSales() {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find()
        .toArray();
    return supplies;
}

async function getSaleById(id) {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .findOne({ '_id': ObjectId(id) });
    return supplies;
}

async function getSalesByMethod(method) {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ 'purchaseMethod': method })
        .toArray();
    return supplies;
}

async function getSalesByCustomerEmail(email) {
    console.log(email);
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ 'customer.email': email })
        .toArray();
    return supplies;
}

async function getSalesByUnsatisfiedCustomers() {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ 'customer.satisfaction': { $lt: 3 } })
        .toArray();
    return supplies;
}

async function getTotalsByLocation() {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .aggregate([
            { '$unwind': { 'path': '$items' } },
            { '$group': { '_id': '$storeLocation', 'totalAmount': { '$sum': { '$toDouble': { '$multiply': ['$items.price', '$items.quantity'] } } } } },
            { '$project': { '_id': false, 'storeLocation': '$_id', 'totalAmount': true } }
        ])
        .toArray();
    return supplies;
}

module.exports = { getAllSales, getSaleById, getSalesByMethod, getSalesByCustomerEmail, getSalesByUnsatisfiedCustomers, getTotalsByLocation };