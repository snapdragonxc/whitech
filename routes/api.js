/* eslint-disable */

var express = require('express');
const products = require('../data/products.json');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(products);
});

module.exports = router;
