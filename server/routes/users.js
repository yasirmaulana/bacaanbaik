const express = require('express');
const router = express.Router();
const  {
  userSignUp,
  userSignIn
} = require('../controllers/user.controller')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/signup', userSignUp)
router.post('/signin', userSignIn)

module.exports = router;
 