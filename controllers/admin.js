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
    books.save();
    res.redirect('/admin/books');
}

exports.getBooks = (req, res, next) => {
    res.render('admin/books.ejs', {
        pageTitle: 'Book List',
        path: '/admin/books'
    })
}