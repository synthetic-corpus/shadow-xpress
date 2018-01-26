// Likely not to be used. But will keep code in case it is needed with testing.

const allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  }

module.exports = {allowCrossDomain};