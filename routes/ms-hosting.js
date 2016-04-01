var express = require('express');
var router = express.Router();
var request = require('request');
var errorHandler = require('../lib/errorHandler.js');

var MS_HOSTING_URL = 'http://mshosting:3000';

// Get a specific molecule file
router.get('/:filename', function(req, res, next) {
	var reqParams = {
		url: MS_HOSTING_URL + '/' + req.params.filename
	}

	request(reqParams, function (error, response, body) {
		if(body.error){
			next(errorHandler(body));
			return;
		}
		res.send(body);
	});
});
