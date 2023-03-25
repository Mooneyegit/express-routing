var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('About', { title: 'About' });
});

router.get('/service', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

module.exports = router;
