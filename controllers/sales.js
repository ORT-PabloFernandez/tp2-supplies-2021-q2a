const sales = require("../data/supplies");

const getSales = async () => {
  return sales.getAllSales();
};

const getSaleById = async (id) => {
  return sales.getSaleById(id);
};

const getSalesByPurchaseMethod = async (purchaseMethod) => {
  return sales.getSalesByPurchaseMethod(purchaseMethod);
};

const getTotalByLocation = async (location) => {
  const total = await sales.getTotalByLocation(location);
  return total;
};

module.exports = {
  getSales,
  getTotalByLocation,
  getSaleById,
  getSalesByPurchaseMethod,
};
