var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/hero', function(req, res, next) {
  res.render('hero', { title: 'Express' });
});

router.get('/fav', function(req, res, next) {
  res.render('fav', { title: 'Express' });
});


router.get('/allFav', function(req, res, next) {
  res.render('allFav', { title: 'Express' });
});

router.get('/allHero', function(req, res, next) {
  res.render('allHero', { title: 'Express' });
});

router.get('/error', function(req, res, next) {
  res.render('error', { title: 'Express' });
});

module.exports = router;
