const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

// const ObjectId = new mongodb.ObjectId();

class Book {
    constructor(title, imageUrl, author, publisher, price, description, id) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
        this.description = description;
        this._id = id;
    }
    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
            dbOp = db.collection('books').updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
        } else {
            dbOp = db.collection('books').insertOne(this);
        }
        return dbOp
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }
    static fetchAll() {
        const db = getDb();
        return db.collection('books').find().toArray()
            .then(books => {
                return books;
            })
            .catch(err => {
                console.log(err);
            })
    }
    static findById(bokId) {
        const db = getDb();
        return db.collection('books').find({ _id: new mongodb.ObjectId(bokId) }).next()
            .then(book => {
                return book;
            })
            .catch(err => {
                console.log(err);
            })
    }
    static deleteById(bokId) {
        const db = getDb();
        return db.collection('books').deleteOne({ _id: new mongodb.ObjectId(bokId) })
            .then(book => {
                console.log(book);
            })
            .catch(err => {
                console.log(err);
            })
    }
}
module.exports = Book;