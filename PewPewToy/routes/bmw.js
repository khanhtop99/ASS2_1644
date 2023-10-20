var express = require('express');
const BmwModel = require('../models/BmwModel');
var router = express.Router();



router.get('/', async (req, res) => {
  var bmw = req.body
  bmw = await BmwModel.find();
  res.render('bmw/index', { bmw: bmw });
})

router.get('/admin', async (req, res) => {
  var bmw = await BmwModel.find();
  res.render('bmw/admin', { bmw: bmw })
})

router.get('/add', (req, res) => {
  res.render('bmw/add')
})
router.post('/add', async (req, res) => {
  var bmw = req.body;
  await BmwModel.create(bmw);
  res.redirect('/bmw/admin')
})

router.get('/delete/:id', async (req, res) => {
  var id = req.params.id;
  await BmwModel.findByIdAndDelete(id);
  res.redirect('/bmw/admin');
})

router.get('/edit/:id', async (req, res) => {
  var bmw = req.body;
  var id = req.params.id;
  bmw = await BmwModel.findById(id);
  res.render('bmw/edit', { bmw: bmw });
})

router.post('/edit/:id', async (req, res) => {
  var id = req.params.id;
  var bmw = req.body;
  await BmwModel.findByIdAndUpdate(id, bmw);
  res.redirect('/bmw/admin')
})

router.get('/detail/:id', async (req, res) => {
  var bmw = req.body;
  var id = req.params.id;
  bmw = await BmwModel.findById(id);
  res.render('bmw/detail', { bmw: bmw })
})
module.exports = router;