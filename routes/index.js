
// This wil import the Express framework so routes can be created.
var express = require('express');

// An Express router to organize the portfolio page URLs.
var router = express.Router();

// Basically a GET request for the homepage.
// router.get() responds when a visitor opens the specified URL.
// res.render() loads the matching EJS template and sends it to the browser.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET request for the About Me page.
// The about.ejs template is rendered when the visitor opens /about.
router.get('/about', function(req, res, next) {
  res.render('about');
});

// GET request for the Projects page.
// The projects.ejs template is rendered when the visitor opens /projects.
router.get('/projects', function(req, res, next) {
  res.render('projects');
});

// GET request for the Contact page.
// The contact.ejs template is rendered when the visitor opens /contact.
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

// Export the router so app.js can connect it to the Express application.
module.exports = router;
