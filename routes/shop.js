const express = require('express');
const router = express.Router();

//import form controller folder
const shopController = require('../controllers/shop');

//to retrieve all books
router.get('/', shopController.getBooks);

module.exports = router;