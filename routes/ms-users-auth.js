var express = require('express');
var router = express.Router();
var request = require('request');
var auth = require('../lib/auth');

var MS_USER_URL = "http://msusers:3000";

// edit user
router.post('/', auth, function(req, res, next) {
	var reqHeaders = {
		authorization: req.headers.authorization;
	}

	var reqParams = {
		url: MS_USER_AUTH_URL,
		method: 'POST',
		headers: reqHeaders,
		json: true,
		body: req.body
	}

	request(reqParams, function (error, response, body) {
		res.send(body);
	});
});

// delete user
router.delete('/:username', auth, function(req, res, next) {
	var reqHeaders = {
		authorization: req.headers.authorization;
	}

	var reqParams = {
		url: MS_USER_AUTH_URL + '/' + req.params.username,
		method:'DELETE',
		headers: reqHeaders
	}

	request(reqParams, function (error, response, body) {
		res.send(body);
	});
});

module.exports = router;
