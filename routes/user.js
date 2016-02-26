var express = require('express');
var router = express.Router();
var request = require('request');

var MS_USER_URL = "http://msusers:3000";

router.get('/', function(req, res, next) {
	var reqParams = {
		url: MS_USER_URL
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

router.get('/:username', function(req, res, next) {
	var reqParams = {
		url: MS_USER_URL + '/' + req.params.username
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

router.put('/', function(req, res, next) {
	var reqParams = {
		url: MS_USER_URL,
		method: 'PUT',
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

router.patch('/', function(req, res, next) {
	var reqParams = {
		url: MS_USER_URL + '/validate',
		method: 'PATCH',
		qs: {
			email: req.query.email,
			key: req.query.key
		}
	};
	request(reqParams, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(body);
		}
		else {
  			res.send(body);
		}
	});
});

router.post('/:username', function(req, res, next) {
	var reqParams = {
		url: MS_USER_URL + '/' + req.params.username,
		method:'POST'
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
	var reqParams = {
		url: MS_USER_URL + '/' + req.params.username,
		method:'DELETE'
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
