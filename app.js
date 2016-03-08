var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var njwt = require('njwt');
var cors = require('cors');

var loginRoute =      require('./routes/login');
var scheduleRoute =   require('./routes/schedule');
var ms_users_public = require('./routes/ms-users-public');
var ms_users_auth =   require('./routes/ms-users-auth');

var app = express();
app.use(cors());

//TODO read from config file
var signingKey = "PLACEHOLDER";

app.use(logger('dev'));
app.use(bodyParser.json({strict: false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// validate JWTs here
// Accepted Header:
//    Authorization: Token YOUR_TOKEN_HERE
app.use(function(req,res,next) {
  req.expired = false;
  req.authenticated = false;

  if(!req.headers.authorization){
    next();
  } else {
    var authorizationArray = req.headers.authorization.split(' ');
    if(authorizationArray[0] === 'Token' && authorizationArray[1]) {
      njwt.verify(authorizationArray[1], signingKey, function(err, ver) {
        if(err) {
          req.expired = true;
          next();
        } else {
          req.authenticated = true;
          next();
        }
      });
    } else {
      next();
    }
  }
});

app.use('/api/login',     loginRoute);
app.use('/api/schedule',  scheduleRoute);
app.use('/api/user',      ms_users_public);
app.use('/api/user',      ms_users_auth);

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
