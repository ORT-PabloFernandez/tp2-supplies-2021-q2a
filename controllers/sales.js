const sales = require('../data/supplies');

async function getSales() {
    return sales.getAllSales();
}

async function getSaleById(id) {
    return sales.getSaleById(id);
}

async function getSalesByMethod(method) {
    return sales.getSalesByMethod(method);
}

async function getSalesByCustomerEmail(email) {
    return sales.getSalesByCustomerEmail(email);
}

async function getSalesByUnsatisfiedCustomers() {
    return sales.getSalesByUnsatisfiedCustomers();
}

async function getTotalsByLocation() {
    return sales.getTotalsByLocation();
}

module.exports = { getSales, getSaleById, getSalesByMethod, getSalesByCustomerEmail, getSalesByUnsatisfiedCustomers, getTotalsByLocation };