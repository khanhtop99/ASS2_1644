var express = require('express');
// const UserModel = require('../models/UserModel');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('pewpewtoy/index');
})

module.exports = router;