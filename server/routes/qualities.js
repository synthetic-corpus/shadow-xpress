const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

// Custom imports

const {Quality} = require('../../models/quality');
const {mongoose} = require('../../db/mongoose');
const {authenticate} = require('../middleware/authenticate');

// Disabling authentication for now, for ease of testing

router.post('/new/',(req,res)=>{
    // Will add a new new quality to the quality database.
});

router.get('/getone/:id',(req,res)=>{
    // will get a single quality from the quality database
});

router.patch('/editone/:id',(req,res)=>{
    // will edit one quality in the database.
});

router.delete('/delete/:id',(req,res)=>{
    // Will delete one entry
});

module.exports = router;