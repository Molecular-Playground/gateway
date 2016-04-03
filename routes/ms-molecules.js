var express = require('express');
var router = express.Router();
var request = require('request');
var errorHandler = require('../lib/errorHandler.js');

var MS_MOLECULES_URL = "http://msmolecules:3000";

// login and recieve authentication token
router.post('/', function(req, res, next) {
	var reqParams = {
		url: MS_MOLECULES_URL,
		method:'GET',
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
