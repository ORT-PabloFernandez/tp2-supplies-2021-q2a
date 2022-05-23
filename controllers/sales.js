const sales = require("../data/supplies");

async function getSales() {
  return sales.getAllSales();
}
async function getVentaId(id) {
  return sales.getVentaId(id);
}
async function getPorVenta(venta) {
  return sales.getPorVenta(venta);
}
async function getPorEmail(email) {
  return sales.getPorEmail(email);
}
async function getInsatisfechos() {
  return sales.getInsatisfechos();
}
async function getLocalidad(localidad) {
  return sales.getLocalidad(localidad);
}

module.exports = {
  getSales,
  getVentaId,
  getPorVenta,
  getPorEmail,
  getInsatisfechos,
  getLocalidad,
};
