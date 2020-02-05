const express = require('express');
const router = express.Router();

//import from controller folder
const adminController = require('../controllers/admin');

//to render add-book.ejs with GET method
router.get('/add-book', adminController.getAddBook);

//to execute with post method
router.post('/add-book', adminController.postAddBook);

//to show all book with get methos
router.get('/books', adminController.getBooks);

module.exports = router;