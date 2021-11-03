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

// Ejercicio1
async function getSaleById(id){
    const connectiondb = await conn.getConnection();
    const supply = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findById(id)
                        .toArray();    
    return supply;
}

//ejercicio2
async function getSaleByPurchase(purchaseMethod){
    const connectiondb = await conn.getConnection();
    const suppliesByPurchase = await connectiondb
                            .db(DATABASE)
                            .collection(SALES)
                            .find({purchaseMethod:purchaseMethod})
                            .toArray();    
    return suppliesByPurchase;

}

//ejercico3
async function getPurchaseByEmail(email){
    const connectiondb = await conn.getConnection();
    const purchaseByEmail = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({email:email})
                        .toArray();    
    return purchaseByEmail;

}

module.exports = {getAllSales,getSaleById,getSaleByPurchase,getPurchaseByEmail};