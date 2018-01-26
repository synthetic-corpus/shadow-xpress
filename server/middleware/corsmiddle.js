// Likely not to be used. But will keep code in case it is needed with testing.

let allowCrossDomain = (req, res, next) => {
    res.set('Access-Control-Allow-Headers','Access-Control-Allow-Origin, Allow-Control-Allow-Methods')
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Allow-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    
    next();
  }

module.exports = {allowCrossDomain};