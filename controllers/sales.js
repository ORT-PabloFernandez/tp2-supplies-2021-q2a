const sales = require("../data/supplies");

async function getSales() {
  return sales.getAllSales();
}

module.exports = { getSales };

//prueba
