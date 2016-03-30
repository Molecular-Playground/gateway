var express = require('express');
var router = express.Router();
var request = require('request');
var errorHandler = require('../lib/errorHandler.js');

var MS_SCHEDULE_URL = "http://msschedule:3000";

// get a specific schedule
router.get('/:username', function(req, res, next) {
	var reqParams = {
		url: MS_SCHEDULE_URL + '/' + req.params.username
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
