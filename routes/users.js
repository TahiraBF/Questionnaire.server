var express = require('express');
var router = express.Router();
var Client = require('../models/clients');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});






module.exports = router;
