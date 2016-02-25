var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("hello from email");
});

module.exports = router;
