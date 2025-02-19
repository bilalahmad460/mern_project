// const mongo = require("mongodb");
// const mongoClient = mongo.MongoClient;
// let _db;
// const dbConnection = (callback) => {
//     mongoClient.connect(dbUrl).then( client => {
//         _db = client.db("sample_mflix");
//         callback();
//     }).catch(err => {
//         console.log(err);
//     });
// }

// const getDb = () => {
//     if(_db) {
//         return _db;
//     }
//     throw "No database found";
// }


// exports.dbConnection = dbConnection;
// exports.getDb = getDb;


const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
// const MONGODB_URL = "motryWrites=true&w=majority&appName=billalmerndb";
const MONGODB_URL = "mongodb://admin:admin@localhost:27017/";

let mongo_db;

const mongoDbConfig = (callback) => {
    MongoClient.connect(MONGODB_URL)
        .then( client => {
            callback(client);
            mongo_db = client.db("bilala-mongodb");
        }).catch( (err) => {
        console.log("Error in connection", err);
    });
}

const getDB = () => {
    if(!mongo_db) {
        throw new Error("Database not initialized");
    }
    return mongo_db;
}

exports.mongoDbConfig = mongoDbConfig;
exports.getDB = getDB;
