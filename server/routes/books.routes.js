const express = require('express');
const router = express.Router();

const BookController = require('../controllers/books.controller');

router.get('/books', BookController.getAll);
router.get('/books/random', BookController.getRandom);

module.exports = router;
