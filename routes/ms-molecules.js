var express = require('express');
var router = express.Router();
var request = require('request');
var errorHandler = require('../lib/errorHandler.js');
var proxyServer = require('http-proxy');

var MS_MOLECULES_URL = "http://msmolecules:3000";

var proxy = proxyServer.createProxyServer({
	host: MS_MOLECULES_URL
});

router.get('/', function(req, res, next) {
	var reqParams = {
		url: MS_MOLECULES_URL,
		method:'GET'
	}

	request(reqParams, function (error, response, body) {
		if(body.error){
			next(errorHandler(body));
			return;
		}
		res.send(body);
	});
});

router.post('/upload', function(req, res, next) {
	proxy.web(req, res, {
		target: MS_MOLECULES_URL
	});
});

router.get('/files/:name', function(req, res, next) {
	proxy.web(req, res, {
		target: MS_MOLECULES_URL
	});
});

router.get('/:name', function(req, res, next) {
	var reqParams = {
		url: MS_MOLECULES_URL + '/' + req.params.name,
		method:'GET'
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
