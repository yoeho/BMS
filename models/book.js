const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

// const ObjectId = new mongodb.ObjectId();

class Book {
    constructor(title, imageUrl, author, publisher, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
        this.description = description;
    }
    save() {
        const db = getDb();
        return db.collection('books').insertOne(this)
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
}
module.exports = Book;