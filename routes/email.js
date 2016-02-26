var express = require('express');
var router = express.Router();
var request = require('request');

var MS_EMAIL_URL = "http://msmail:3000";

router.put('/validate', function(req, res, next) {
	console.log('gateway - PUT: /validate')
	var reqParams = {
		url: MS_EMAIL_URL + '/validate',
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

router.put('/general', function(req, res, next) {
	console.log('gateway - PUT: /general')
	var reqParams = {
		url: MS_EMAIL_URL + '/general',
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

module.exports = router;
