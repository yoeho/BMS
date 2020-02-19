const Book = require('../models/book');
exports.getAddBook = (req, res, next) => {
    res.render('admin/add-book.ejs', {
        pageTitle: 'Add Book',
        path: '/admin/add-book'
    });
}

exports.postAddBook = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const author = req.body.author;
    const publisher = req.body.publisher;
    const price = req.body.price;
    const description = req.body.description;
    const books = new Book(title, imageUrl, author, publisher, price, description);
    books.save()
        .then(result => {
            console.log(result);
            res.redirect('/admin/books');

        })
        .catch(err => {
            console.log(err);
        });
}

exports.getBooks = (req, res, next) => {
    Book.fetchAll().then(books => {
        res.render('admin/books.ejs', {
            pageTitle: 'Book List',
            path: '/admin/books',
            books: books
        })
    }).catch(err => {
        console.log(err);
    })
}