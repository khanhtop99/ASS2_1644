var express = require('express');
const BmwModel = require('../models/BmwModel');
const MerModel = require('../models/MerModel');
// const UserModel = require('../models/UserModel');
var router = express.Router();

router.get('/', async (req, res) => {
  var bmw = req.body;
  bmw = await BmwModel.find();
  res.render('pewpewtoy/index', { bmw: bmw });
})

router.get('/cart', (req, res) => {
  res.render('pewpewtoy/cart');
})

router.get('/list', async(req, res) => {
  var bmw = req.body;
  bmw = await BmwModel.find();
  res.render('pewpewtoy/list', { bmw: bmw });
})


// show data of bmw in admin
router.get('/admin', async (req, res) => {
  var bmw = req.body;
  var mer = req.body;
  mer = await MerModel.find();
  bmw = await BmwModel.find();
  res.render('pewpewtoy/admin', { bmw: bmw , mer:mer});
})
module.exports = router;

