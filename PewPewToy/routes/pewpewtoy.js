var express = require('express');
// const UserModel = require('../models/UserModel');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('pewpewtoy/index');
})

router.get('/cart', (req, res) => {
  res.render('pewpewtoy/cart');
})

router.get('/list', (req, res) => {
  res.render('pewpewtoy/list');
})
module.exports = router;