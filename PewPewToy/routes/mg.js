var express = require('express');
const MgModel = require('../models/MgModel');
var router = express.Router();



router.get('/', async (req, res) => {
  var mg = req.body
  mg = await MgModel.find();
  res.render('mg/index', { mg: mg });
})

router.get('/admin', async (req, res) => {
  var mg = await MgModel.find();
  res.render('mg/admin', { mg: mg })
})

router.get('/add', (req, res) => {
  res.render('mg/add')
})
router.post('/add', async (req, res) => {
  var mg = req.body;
  await MgModel.create(mg);
  res.redirect('/mg/admin')
})

router.get('/delete/:id', async (req, res) => {
  var id = req.params.id;
  await MgModel.findByIdAndDelete(id);
  res.redirect('/mg/admin');
})

router.get('/edit/:id', async (req, res) => {
  var mg = req.body;
  var id = req.params.id;
  mg = await MgModel.findById(id);
  res.render('mg/edit', { mg: mg });
})

router.post('/edit/:id', async (req, res) => {
  var id = req.params.id;
  var mg = req.body;
  await MgModel.findByIdAndUpdate(id, mg);
  res.redirect('/mg/admin')
})

router.get('/detail/:id', async (req, res) => {
  var mg = req.body;
  var id = req.params.id;
  mg = await MgModel.findById(id);
  res.render('mg/detail', { mg: mg })
})
module.exports = router;