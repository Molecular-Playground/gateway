module.exports = function(body, next) {
  var err = new Error(body.message);
  err.status = body.error.status;
  return err;
}