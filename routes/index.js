var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Acceuil' });
});

router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Contact' });
});

router.get('/collection', function(req, res, next) {
  res.render('pages/collection', { title: 'Collection'});
});

router.get('/collection/hiver', function(req, res, next) {
  res.render('pages/collection', { title: 'Collection', saison: 'hiver'});
});

router.get('/collection/ete', function(req, res, next) {
  res.render('pages/collection', { title: 'Collection', saison: 'ete'});
});

router.get('/histoire', function(req, res, next) {
  res.render('pages/histoire', { title: 'Histoire' });
});

module.exports = router;
