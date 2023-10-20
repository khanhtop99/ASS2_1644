var express = require('express');
const MerModel = require('../models/MerModel');
var router = express.Router();



router.get('/', async (req, res) => {
  var mer = req.body
  mer = await MerModel.find();
  res.render('mer/index', { mer: mer });
})

router.get('/admin', async (req, res) => {
  var mer = await MerModel.find();
  res.render('mer/admin', { mer: mer })
})

router.get('/add', (req, res) => {
  res.render('mer/add')
})
router.post('/add', async (req, res) => {
  var mer = req.body;
  await MerModel.create(mer);
  res.redirect('/mer/admin')
})

router.get('/delete/:id', async (req, res) => {
  var id = req.params.id;
  await MerModel.findByIdAndDelete(id);
  res.redirect('/mer/admin');
})

router.get('/edit/:id', async (req, res) => {
  var mer = req.body;
  var id = req.params.id;
  mer = await MerModel.findById(id);
  res.render('mer/edit', { mer: mer });
})

router.post('/edit/:id', async (req, res) => {
  var id = req.params.id;
  var mer = req.body;
  await MerModel.findByIdAndUpdate(id, mer);
  res.redirect('/mer/admin')
})

router.get('/detail/:id', async (req, res) => {
  var mer = req.body;
  var id = req.params.id;
  mer = await MerModel.findById(id);
  res.render('mer/detail', { mer: mer })
})
module.exports = router;