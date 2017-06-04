var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Musteriler = require('../modules/Musteriler');
var Dataloggerlar = require('../modules/Dataloggerlar');
var Sensorler = require('../modules/Sensorler');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;