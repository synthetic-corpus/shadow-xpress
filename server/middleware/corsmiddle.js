// Likely not to be used. But will keep code in case it is needed with testing.

let allowCrossDomain = function(req, res, next) {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  }

module.exports = {allowCrossDomain};