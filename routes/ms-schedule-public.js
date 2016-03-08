var express = require('express');
var router = express.Router();
var request = require('request');

var MS_SCHEDULE_URL = "http://msschedule:3000";

// get a specific schedule
router.get('/:username', function(req, res, next) {
	var reqParams = {
		url: MS_SCHEDULE_URL + '/' + req.params.username
	}

	request(reqParams, function (error, response, body) {
		res.send(body);
	});
});

module.exports = router;
