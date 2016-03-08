var express = require('express');
var router = express.Router();
var request = require('request');

var MS_LOGIN_URL = "http://mslogin:3000";

// login and recieve authentication token
router.post('/', function(req, res, next) {
	var reqParams = {
		url: MS_LOGIN_URL,
		method:'POST',
		json: true,
		body: req.body
	}

	request(reqParams, function (error, response, body) {
		res.send(body);
	});
});

module.exports = router;
