var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');
var auth = require('../lib/auth.js');

// get a specific playlist
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

// update an existing playlist
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

// rename an existing playlist
router.post('/rename', auth, function(req, res, next) {
  var reqHeaders = {
		authorization: req.headers.authorization
	}

	var reqParams = {
		url: MS_SCHEDULE_URL + '/rename',
		method: 'POST',
		headers: reqHeaders,
		json: true,
		body: req.body
	}

  request(reqParams, function (error, response, body) {
    res.send(body);
  });
});

// create a new playlist
router.put('/', auth, function(req, res, next) {
  var reqHeaders = {
		authorization: req.headers.authorization
	}

	var reqParams = {
		url: MS_SCHEDULE_URL,
		method: 'PUT',
		headers: reqHeaders,
		json: true,
		body: req.body
	}

  request(reqParams, function (error, response, body) {
    res.send(body);
  });
});

module.exports = router;
