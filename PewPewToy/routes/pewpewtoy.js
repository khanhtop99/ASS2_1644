var express = require('express');
const BmwModel = require('../models/BmwModel');
const MerModel = require('../models/MerModel');
const MgModel = require('../models/MgModel');
// const UserModel = require('../models/UserModel');
var router = express.Router();

router.get('/', async (req, res) => {
  var bmw = req.body;
  var mer = req.body;
  var mg  = req.body;

  
  bmw = await BmwModel.find();
  mer = await MerModel.find();
  mg  = await MgModel.find();
  res.render('pewpewtoy/index', { bmw: bmw , mer: mer, mg: mg });
})

router.get('/cart', (req, res) => {
  res.render('pewpewtoy/cart');
})

router.get('/list', async(req, res) => {
  var bmw = req.body;
  var mer = req.body;
  bmw = await BmwModel.find();
  mer = await MerModel.find();
  res.render('pewpewtoy/list', { bmw: bmw , mer: mer });
})


// show data of bmw in admin
router.get('/admin', async (req, res) => {
  var bmw = req.body;
  var mer = req.body;
  var mg = req.body;

  mer = await MerModel.find();
  bmw = await BmwModel.find();
  mg = await MgModel.find()
 
  res.render('pewpewtoy/admin', { bmw:bmw , mer:mer , mg: mg });
})
module.exports = router;

