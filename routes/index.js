/* eslint-disable */

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});
router.get('/*', (req, res) => {
  res.render('index');
});

module.exports = router;
