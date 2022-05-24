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

async function getVentaId(id) {
  const connectiondb = await conn.getConnection();
  const respuesta = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ _id: new objectId(id) })
    .toArray();

  return respuesta;
}

async function getPorVenta(venta) {
  const supplies = await getAllSales();
  const respuesta = supplies.filter(
    (ventas) => ventas.purchaseMethod === venta
  );

  return respuesta;
}

async function getPorEmail(email) {
  const supplies = await getAllSales();
  const respuesta = supplies.filter(
    (ventas) => ventas.customer.email === email
  );

  return respuesta;
}

async function getInsatisfechos() {
  // const connectiondb = await conn.getConnection();
  // const supplies = await connectiondb
  //   .db(DATABASE)
  //   .collection(SALES)
  //   .find({ "customer.satisfaction": { $lt: 3 } })
  //   .toArray();

  const supplies = await getAllSales();
  const respuesta = supplies.filter(
    (ventas) => ventas.customer.satisfaction <= 3
  );

  return respuesta;
}

async function getLocalidad(localidad) {
  // const connectiondb = await conn.getConnection();
  // const supplies = await connectiondb
  //   .db(DATABASE)
  //   .collection(SALES)
  //   .find({ storeLocation: localidad })
  //   .toArray();
  const supplies = await getAllSales();
  const localida = supplies.filter(
    (ventas) => ventas.storeLocation == localidad
  );
  let suma = 0;
  for (let index = 0; index < localida.length; index++) {
    const element = localida[index];
    element.items.forEach((element) => {
      suma += parseFloat(element.price) * element.quantity;
    });
  }

  return suma;
}

module.exports = {
  getAllSales,
  getVentaId,
  getPorVenta,
  getPorEmail,
  getInsatisfechos,
  getLocalidad,
};
