const express = require('express');
const router = express.Router();
const {
  addBook
} = require('../controllers/book.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/add', addBook)

module.exports = router;
