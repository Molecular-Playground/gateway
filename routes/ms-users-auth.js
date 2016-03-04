var express = require('express');
var router = express.Router();
var request = require('request');

var MS_USER_URL = "http://msusersauth:3000";

router.post('/', function(req, res, next) {
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
		if (!error && response.statusCode == 200) {
			res.send(body);
		}
		else {
  			res.send(body);
		}
	});
});

router.delete('/:username', function(req, res, next) {
	var reqHeaders = {
		authorization: req.headers.authorization;
	}

	var reqParams = {
		url: MS_USER_AUTH_URL + '/' + req.params.username,
		method:'DELETE',
		headers: reqHeaders
	}

	request(reqParams, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(body);
		}
		else {
  			res.send(body);
		}
	});
});

module.exports = router;
