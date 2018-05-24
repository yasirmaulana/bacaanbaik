const express = require('express');
const router = express.Router();
const images = require('../helpers/images')
const {
  addBook
} = require('../controllers/book.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/add',
  images.multer.single('image'),
  images.sendUploadToGCS,
  addBook
)

module.exports = router;
