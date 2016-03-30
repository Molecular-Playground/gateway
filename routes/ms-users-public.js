var express = require('express');
var router = express.Router();
var request = require('request');
var errorHandler = require('../lib/errorHandler.js');

var MS_USER_URL = "http://msusers:3000";

// get users listing
router.get('/', function(req, res, next) {
	var reqParams = {
		url: MS_USER_URL
	}

	request(reqParams, function (error, response, body) {
		if(body.error){
			next(errorHandler(body));
			return;
		}
		res.send(body);
	});
});

// get specific user
router.get('/:username', function(req, res, next) {
	var reqParams = {
		url: MS_USER_URL + '/' + req.params.username
	}

	request(reqParams, function (error, response, body) {
		if(body.error){
			next(errorHandler(body));
			return;
		}
		res.send(body);
	});
});

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

module.exports = router;
