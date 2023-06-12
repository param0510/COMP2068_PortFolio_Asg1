var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('./index/home', { title: 'Home' });
});

router.get('/about', (req, res, next) => {
  res.render('./index/about', {title: 'About'})
})

router.get('/projects', (req, res, next) => {
  res.render('./index/projects', {title: 'My Projects'})
})

router.get('/contact', (req, res, next) => {
  res.render('./index/contact', {title: 'Contact Me'})
})

module.exports = router;
