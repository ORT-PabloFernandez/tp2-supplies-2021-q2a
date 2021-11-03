const customers = require("../data/customer");

const getCustomerByEmail = async (email) => {
  return customers.getCustomerByEmail(email);
};

const getUnsatisfiedCustomers = async () => {
  return customers.getUnsatisfiedCustomers();
};

module.exports = { getCustomerByEmail, getUnsatisfiedCustomers };
