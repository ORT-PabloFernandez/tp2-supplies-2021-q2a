const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const { ObjectId } = require('bson');


async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}
async function getSalePorId(_id){
    const connectiondb = await conn.getConnection();
    const sale = connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .findOne({_id: new ObjectId(_id)})
        return sale;

}

async function getListaVentasPorMetodoCompra(_purchaseMethod){
    const connectiondb = await conn.getConnection();
    const query = {"purchaseMethod": _purchaseMethod}
    const lista = connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .find({query})
                    .toArray();
        return lista;

}

async function getComprasPorClienteByEmail(_email){
    const connectiondb = await conn.getConnection();
    const query = {"email": _email}
    const lista = connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .find({query})
                    .toArray();
        return lista;

}

async function getClientesInsatisfechos(){
    const connectiondb = await conn.getConnection();
    const lista = connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .find({satisfaction:{$lt: 30}})
                    .toArray()
                    .map(elemento => elemento.user)
        return Object.keys(lista);

}  

module.exports =  {getAllSales, getSalePorId,getListaVentasPorMetodoCompra,getComprasPorClienteByEmail,getClientesInsatisfechos};