const Book = require('../models/book');
exports.getIndex = (req, res, next) => {
    Book.fetchAll((books) => {
        res.render('shop/index.ejs', {
            pageTitle: 'Shop',
            path: '/',
            books: books
        });
    });

}

exports.getBooks = (req, res, next) => {
    Book.fetchAll((books) => {
        res.render('shop/book-list.ejs', {
            pageTitle: "All Books",
            path: '/books',
            books: books
        });
    });
}

exports.getBook = (req, res, next) => {
    const bokId = req.params.bookId;
    console.log(bokId);
    Book.findById(bokId, dc => {
        res.render('shop/book-detail.ejs', {
            pageTitle: 'Book Detail',
            path: '/books',
            book: dc
        });
    });
}

exports.getCart = (req, res, next) => {
    Book.fetchAll((books) => {
        res.render('shop/cart.ejs', {
            pageTitle: 'Cart Page',
            path: '/cart',
            books: books
        })
    })
}

exports.getOrders = (req, res, next) => {
    Book.fetchAll((books) => {
        res.render('shop/orders.ejs', {
            pageTitle: 'Order Page',
            path: '/orders',
            books: books
        })
    })
}