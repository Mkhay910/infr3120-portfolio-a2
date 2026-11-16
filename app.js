
// Imports http-errors to create HTTP errors such as a 404 page.
var createError = require('http-errors');

// Import Express, which is used to create and manage the web application.
var express = require('express');

// Import Node.js path utilities to work with folder and file paths.
var path = require('path');

// Import cookie-parser to read cookies sent by the browser.
var cookieParser = require('cookie-parser');

// Import Morgan to log HTTP requests in the terminal.
var logger = require('morgan');

// Import the route files that contain the website's page URLs.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Creates an Express application.
var app = express();

// Tell Express where the EJS templates are stored.
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the template engine used to generate HTML pages.
app.set('view engine', 'ejs');

// Middleware that logs incoming requests in the terminal.
app.use(logger('dev'));

// Middleware that allows Express to read JSON request data.
app.use(express.json());

// Middleware that reads data submitted through HTML forms.
app.use(express.urlencoded({ extended: false }));

// Middleware that allows the application to read browser cookies.
app.use(cookieParser());

// Serve static files such as CSS, JavaScript, images and videos.
// The public folder contains these files.
app.use(express.static(path.join(__dirname, 'public')));

// This connects the main portfolio router to the website.
app.use('/', indexRouter);

// This connects the users router to the /users URL.
app.use('/users', usersRouter);

// Create a 404 error when a requested page cannot be found.
app.use(function(req, res, next) {
  next(createError(404));
});

// Error-handling middleware for displaying application errors.
app.use(function(err, req, res, next) {
  // Store the error message so it can be displayed in the template.
  res.locals.message = err.message;

  // Only display detailed error information during development.
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Set the HTTP status code and display the error EJS page.
  res.status(err.status || 500);
  res.render('error');
});

// Export the Express application so it can be used by the server.
module.exports = app;
