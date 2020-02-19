const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

//Connection with mongodb
const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://min:min123@cluster0-5rdfp.mongodb.net/bookstore')
        .then(client => {
            console.log('Connected..');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}
//Access db
const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "No database found";
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;