const conn = require("./conn");
const sales = require("../data/supplies")
const DATABASE = "sample_supplies";
const SALES = "sales";

const getCustomerByEmail = async (email) => {
  const connectiondb = await conn.getConnection();
  const customer = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .findOne({ "customer.email": email });
  return customer;
};

const getUnsatisfiedCustomers = async () => {
  const allSales = await sales.getAllSales();
  const customers = allSales
    .filter((sale) => sale.customer.satisfaction < 3)
    .map((sale) => {
      const customer = sale.customer;
      return customer;
    });
  return customers;
};

module.exports = { getCustomerByEmail, getUnsatisfiedCustomers };
