var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

var ms_login_public =           require('./routes/ms-login-public');
var ms_schedule_auth =          require('./routes/ms-schedule-auth');
var ms_schedule_public =        require('./routes/ms-schedule-public');
var ms_schedule_playlist_auth = require('./routes/ms-schedule-playlist-auth');
var ms_users_auth =             require('./routes/ms-users-auth');
var ms_users_public =           require('./routes/ms-users-public');
var ms_molecule =               require('./routes/ms-molecules');

var app = express();
app.use( ());

app.use(logger('dev'));
app.use(bodyParser.json({strict: false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/login',     ms_login_public);
app.use('/api/schedule',  ms_schedule_auth);
app.use('/api/schedule',  ms_schedule_public);
app.use('/api/playlist',  ms_schedule_playlist_auth);
app.use('/api/user',      ms_users_auth);
app.use('/api/user',      ms_users_public);
app.use('/api/molecule',  ms_molecule);

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
