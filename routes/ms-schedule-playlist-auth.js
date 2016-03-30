var express = require('express');
var router = express.Router();
var request = require('request');
var auth = require('../lib/auth.js');
var errorHandler = require('../lib/errorHandler.js');

var MS_SCHEDULE_URL = "http://msschedule:3000";

// get every playlist
router.get('/', auth, function(req,res,next) {
  var reqHeaders = {
    authorization: req.headers.authorization
  }

  var reqParams = {
		url: MS_SCHEDULE_URL + '/playlist',
		headers: reqHeaders
	}

	request(reqParams, function (error, response, body) {
    	if(body.error){
			next(errorHandler(body));
			return;
		}
		res.send(body);
	});
});

// update an existing playlist
router.post('/', auth, function(req, res, next) {
  var reqHeaders = {
		authorization: req.headers.authorization
	}

	var reqParams = {
		url: MS_SCHEDULE_URL + '/playlist',
		method: 'POST',
		headers: reqHeaders,
		json: true,
		body: req.body
	}

  request(reqParams, function (error, response, body) {
    if(body.error){
		next(errorHandler(body));
		return;
	}
    res.send(body);
  });
});

// rename an existing playlist
router.post('/rename', auth, function(req, res, next) {
  var reqHeaders = {
		authorization: req.headers.authorization
	}

	var reqParams = {
		url: MS_SCHEDULE_URL + '/playlist/rename',
		method: 'POST',
		headers: reqHeaders,
		json: true,
		body: req.body
	}

  request(reqParams, function (error, response, body) {
    if(body.error){
		next(errorHandler(body));
		return;
	}
    res.send(body);
  });
});

// create a new playlist
router.put('/', auth, function(req, res, next) {
  var reqHeaders = {
		authorization: req.headers.authorization
	}

	var reqParams = {
		url: MS_SCHEDULE_URL + '/playlist',
		method: 'PUT',
		headers: reqHeaders,
		json: true,
		body: req.body
	}

  request(reqParams, function (error, response, body) {
    if(body.error){
		next(errorHandler(body));
		return;
	}
    res.send(body);
  });
});

module.exports = router;
