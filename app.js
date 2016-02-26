var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var emailRoute = require('./routes/email');
var loginRoute = require('./routes/login');
var scheduleRoute = require('./routes/schedule');
var userRoute = require('./routes/user');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json({strict: false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/email', emailRoute);
app.use('/api/login', loginRoute);
app.use('/api/schedule', scheduleRoute);
app.use('/api/user', userRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({ message: err.message });
});


module.exports = app;
