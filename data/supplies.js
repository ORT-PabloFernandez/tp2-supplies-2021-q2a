const { ClientSession } = require("mongodb");
const conn = require("./conn");
const DATABASE = "sample_supplies";
const SALES = "sales";
const objectId = require("mongodb").ObjectId;

async function getAllSales() {
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find()
    .toArray();
  return supplies;
}

async function getSalesByid(id) {
  const connectiondb = await conn.getConnection();
  const sales = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ _id: new objectId(id) })
    .toArray();
  return sales;
}

async function getSalesByPm(purchaseMeth) {
  const connectiondb = await conn.getConnection();
  const salesByPm = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ purchaseMethod: purchaseMeth })
    .toArray();
  return salesByPm;
}

async function getSalesByEmail(email) {
  const connectiondb = await conn.getConnection();
  const salesByEmail = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ "customer.email": email })
    .toArray();
  return salesByEmail;
}

async function getUnstatifiedCustomers() {
  const connectiondb = await conn.getConnection();
  const unsatisfiedCustomers = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ "customer.satisfaction": { $lt: 3 } })
    .toArray();
  console.log(unsatisfiedCustomers);
  return unsatisfiedCustomers;
}

module.exports = {
  getAllSales,
  getSalesByid,
  getSalesByPm,
  getSalesByEmail,
  getUnstatifiedCustomers,
};
