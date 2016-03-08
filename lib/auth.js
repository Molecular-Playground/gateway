// Accepted Header:
//    Authorization: Token YOUR_TOKEN_HERE
module.exports = function(req,res,next) {
  if(!req.headers.authorization) {
    // token not sent
    res.status(401).end();
  } else {
    var authorizationArray = req.headers.authorization.split(' ');
    if(authorizationArray[0] === 'Token' && authorizationArray[1]) {
      njwt.verify(authorizationArray[1], signingKey, function(err, ver) {
        if(err) {
          // token is expired
          res.status(401).end();
        } else {
          // token is Gucci!
          next();
        }
      });
    } else {
      // token incorrect format
      res.status(401).end();
    }
  }
}
