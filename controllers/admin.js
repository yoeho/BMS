const mongodb = require('mongodb');
const Book = require('../models/book');
exports.getAddBook = (req, res, next) => {
    res.render('admin/book-form.ejs', {
        pageTitle: 'Add Book',
        path: '/admin/add-book',
        editing: false
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

exports.postDeleteBook = (req, res, next) => {
    const bokId = req.body.bookId;
    // console.log(bokId);
    Book.deleteById(bokId)
        .then(() => {
            console.log('Successful delete product');
            res.redirect('/admin/books');
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getEditBook = (req, res, next) => {
    const bokId = req.params.bookId;
    // console.log(bokId);
    const editMode = req.query.edit;
    Book.findById(bokId)
        .then(book => {
            res.render('admin/book-form.ejs', {
                pageTitle: "Edit Page",
                path: '/admin/edit-book',
                book: book,
                editing: editMode
            })
        })
        .catch(err => {
            console.log(err);
        })
}
exports.postEditBook = (req, res, next) => {
    const bokId = req.body.bookId;
    console.log(bokId);
    const updatedTitle = req.body.title;
    const updatedImageUrl = req.body.imageUrl;
    const updateAuthor = req.body.author;
    const updatedPublisher = req.body.publisher;
    const updatedPrice = req.body.price;
    const updatedDesc = req.body.description;

    const book = new Book(updatedTitle, updatedImageUrl, updateAuthor, updatedPublisher, updatedPrice, updatedDesc, new mongodb.ObjectId(bokId));
    book.save()
        .then(() => {
            console.log('Your update is successful');
            res.redirect('/admin/books');
        })
        .catch(err => {
            console.log(err);
        })
}