const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://admin:admin123@cluster0-5rdfp.mongodb.net/test')
        .then(
            client => {
                console.log('Connected');
                callback(client);
            }
        ).catch(err => {
            console.log(err);
        });
}
module.exports = mongoConnect;