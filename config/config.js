// To check if in Heroku or Developement
let env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === "test"){
    let settings = require('./config.json');
    let envConfig = settings[env];
    Object.keys(envConfig).forEach((key)=>{
        process.env[key] = envConfig[key];
    });
};

// console.log(process.env.MONGODB_URI);