const express = require('express');
const router = express.Router();

//import form controller folder
const shopController = require('../controllers/shop');

//to retrieve all books
router.get('/', shopController.getIndex);

//to retrieve all books
router.get('/books', shopController.getBooks);
router.get('/books/:bookId', shopController.getBook);

//Cart
router.get('/cart', shopController.getCart);

//Orders
router.get('/orders', shopController.getOrders);

module.exports = router;