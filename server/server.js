// NPM modules

const express = require('express');
const bodyParser = require('body-parser');
// const {ObjectID} = require('mongodb');
// const _ = require('lodash');

// set configuration
require('../config/config.js');
const port = process.env.PORT;
const dataURI = process.env.MONGODB_URI;
const salt = process.env.JWT_SECRET;

// Custom routes from modules folder
const userRoutes = require('./routes/users');
const characterRoutes = require('./routes/characters');
const qualityRoutes = require('./routes/qualities');
const skillRoutes = require ('./routes/skills');

// For setting up SSL via Stack Overflow!
const fs = require('fs');
const https = require('https');
const path = require('path');
const privatePath = path.join(__dirname, "..","sslcert","server.key");
const certPath = path.join(__dirname, "..","sslcert","server.crt");
const privateKey = fs.readFileSync(privatePath,'utf8');
const certificate = fs.readFileSync(certPath,'utf8');
const credentials = {key:privateKey,cert:certificate};


// Begin App and routes!
const app = express();
const distDir = __dirname + "/../dist/";
app.use(express.static(distDir));
app.use(bodyParser.json());
app.use('/users',userRoutes);
app.use('/characters',characterRoutes);
app.use('/qualities',qualityRoutes);
app.use('/skills',skillRoutes);

/*

commented out because I do not want to use SSL at this time.

let httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, ()=>{
    console.log(`https listens on ${port}`)
})
*/
app.listen(port, ()=>{
    console.log(`http listens on ${port}`)
});

module.exports = { app };