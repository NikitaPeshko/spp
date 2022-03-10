var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LAB1 NIKITA PESHKO 951002' });
});

module.exports = router;
