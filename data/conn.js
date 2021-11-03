require('dotenv').config();
const mongoclient = require('mongodb').MongoClient;

const uri = process.env.MONGODB;
//HARDCODEO EL URI DE LA CONEXIÒN A MONGO YA QUE NO LEVANTABA EL PROYECTO POR UN ERROR: TypeError: Cannot read property 'match' of undefined
const url = "mongodb+srv://admin:tp2@cluster0.3bm3a.azure.mongodb.net/sample_supplies?retryWrites=true&w=majority";
const client = new mongoclient(url);

let instance = null;

async function getConnection(){
    if(instance == null){
        instance = await client.connect();
    }
    return instance;
}

module.exports = {getConnection};