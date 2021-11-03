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
                        .findOne({_id: new ObjectId(id)})
    return sale;
}

async function getAllSalesByPurchaseMethod(pm){
    const connectiondb = await conn.getConnection();
    const salesFiltered = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({purchaseMethod: pm})
                        .toArray()
    return salesFiltered;
}

async function getSaleByCustomerEmail(email){
    const connectiondb = await conn.getConnection();
    const sale = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({"customer.email": email});
    return sale;    
}

async function getInsatisfiedCustomers(){
    const sales = await getAllSales();
    const customers = sales
                        .filter(sale => sale.customer.satisfaction < 3)
                        .map(sale => { 
                            const customer = sale.customer;
                            return customer
                        })
    return customers;
}

async function getTotalAmountByLocation(location){
    const sales = await getAllSales();
    const locationSales = sales.filter( sale => sale.storeLocation == location)
    let amount = 0;
    for(let i = 0; i < locationSales.length; i++){
        for(let j = 0; j < locationSales[i].items.length; i++){
            amount = amount + locationSales[i].items[j].price.$numberDecimal;
        }
    }
    return amount
}

module.exports = {getAllSales, getSaleById, getAllSalesByPurchaseMethod, getSaleByCustomerEmail, getInsatisfiedCustomers, getTotalAmountByLocation};