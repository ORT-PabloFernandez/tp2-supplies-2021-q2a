const conn = require("./conn");
const ObjectId = require("mongodb").ObjectId;
const DATABASE = "sample_supplies";
const SALES = "sales";

const getAllSales = async () => {
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find()
    .toArray();
  return supplies;
};

const getSaleById = async (id) => {
  const connectiondb = await conn.getConnection();
  const supply = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .findOne({ _id: ObjectId(id) });
  return supply;
};

const getSalesByPurchaseMethod = async (purchaseMethod) => {
  const connectiondb = await conn.getConnection();
  const supply = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ purchaseMethod: purchaseMethod })
    .toArray();
  return supply;
};

const getTotalByLocation = async (location) => {
  const connectiondb = await conn.getConnection();
  const supplyByLocation = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ storeLocation: location })
    .toArray();
  return supplyByLocation;
};

module.exports = {
  getAllSales,
  getTotalByLocation,
  getSaleById,
  getSalesByPurchaseMethod,
};
