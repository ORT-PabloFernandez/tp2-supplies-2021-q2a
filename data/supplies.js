const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
//import { ObjectId } from "bson";
ObjectId = require('mongodb').ObjectID;


async function getAllSales(){
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
    const sale = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .findOne({ _id: new ObjectId(id) });
    return sale;
  }

  async function getSalesByPurchaseMethod(filter){
    const connectiondb = await conn.getConnection();
    const filteredSales = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .find({ purchaseMethod: filter })
                    .toArray();
    return filteredSales;

  }

  async function getSalesByUserEmail(mail){
    const connectiondb = await conn.getConnection();
    const salesByUserEmail = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .find({ "customer.email": mail })
                    .toArray();
    return salesByUserEmail;

  }

  async function unsatisfiedusers(){
    const connectiondb = await conn.getConnection();
    const unsatisfiedUsers = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .find({"customer.satisfaction": { $lte: 3 }})
                    .toArray();
    return unsatisfiedUsers;
  }
  


module.exports = {getAllSales, getSaleById, getSalesByPurchaseMethod, getSalesByUserEmail, unsatisfiedusers};