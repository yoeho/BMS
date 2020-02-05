const Book = require('../models/book');
exports.getBooks = (req, res, next) => {
    Book.fetchAll((books) => {
        res.render('shop/index.ejs', {
            pageTitle: 'Shop',
            path: '/',
            books: books
        });
    });

}