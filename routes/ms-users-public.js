var express = require('express');
var router = express.Router();
var request = require('request');
var errorHandler = require('../lib/errorHandler.js');

var MS_USER_URL = "http://msusers:3000";

// create user
router.put('/', function(req, res, next) {
	var reqParams = {
		url: MS_USER_URL,
		method: 'PUT',
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

// validate user
router.post('/validate', function(req, res, next) {
	var reqParams = {
		url: MS_USER_URL + '/validate',
		method: 'POST',
		json: true,
		body: req.body
	};

	request(reqParams, function (error, response, body) {
		if(body.error){
			next(errorHandler(body));
			return;
		}
		res.send(body);
	});
});

// send password reset email
router.post('/send-reset-email', function(req, res, next) {
	var reqParams = {
		url: MS_USER_URL + '/send-reset-email',
		method: 'POST',
		json: true,
		body: req.body
	};

	request(reqParams, function (error, response, body) {
		if(body.error){
			next(errorHandler(body));
			return;
		}
		res.send(body);
	});
});

// reset a password!
router.post('/reset-password', function(req, res, next) {
	var reqParams = {
		url: MS_USER_URL + '/reset-password',
		method: 'POST',
		json: true,
		body: req.body
	};

	request(reqParams, function (error, response, body) {
		if(body.error){
			next(errorHandler(body));
			return;
		}
		res.send(body);
	});
});

module.exports = router;
