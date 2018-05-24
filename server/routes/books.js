const express = require('express');
const router = express.Router();
const images = require('../helpers/images')
const {
  addBook,
  listBook
} = require('../controllers/book.controller');

/* GET users listing. */
router.get('/list', listBook)
router.post('/add',
  images.multer.single('image'),
  images.sendUploadToGCS,
  addBook
)


module.exports = router;
