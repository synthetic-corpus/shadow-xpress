var allowCrossDomain = function(req, res, next) {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  }

module.exports = {allowCrossDomain};