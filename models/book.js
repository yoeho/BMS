const fs = require('fs');
const path = require('path');

const getBooksFromFile = (cb) => {
    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'book.json');
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
}
module.exports = class Book {
    constructor(title, imageUrl, author, publisher, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.author = author;
        this.publisher = publisher;
        this.price = price;
        this.description = description;
    }
    save() {
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'book.json');
        fs.readFile(p, (err, fileContent) => {
            let books = [];
            if (!err) {
                books = JSON.parse(fileContent);
            }
            books.push(this);
            fs.writeFile(p, JSON.stringify(books), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
    }
    //read
    static fetchAll(cb) {
        // const p = path.join(path.dirname(process.mainModule.filename), 'data', 'books.json');
        // fs.readFile(p, (err, fileContent) => {
        //     if (err) {
        //         cb([]);
        //     } else {
        //         cb(JSON.parse(fileContent));
        //     }
        // });
        getBooksFromFile(cb);
    }
}