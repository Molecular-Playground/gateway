var express = require('express');
var router = express.Router();
var request = require('request');
var auth = require('../lib/auth.js');

var MS_SCHEDULE_URL = "http://msschedule:3000";

// get every schedule
router.get('/', auth, function(req,res,next) {
  var reqHeaders = {
    authorization: req.headers.authorization
  }

  var reqParams = {
		url: MS_SCHEDULE_URL,
		headers: reqHeaders
	}

	request(reqParams, function (error, response, body) {
		res.send(body);
	});
});

// update an existing schedule
router.post('/', auth, function(req, res, next) {
  var reqHeaders = {
		authorization: req.headers.authorization
	}

	var reqParams = {
		url: MS_SCHEDULE_URL,
		method: 'POST',
		headers: reqHeaders,
		json: true,
		body: req.body
	}

  request(reqParams, function (error, response, body) {
    res.send(body);
  });
});

module.exports = router;
