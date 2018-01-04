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
    let quality = req.body;
    if(quality.cost < 0 ){
        quality.beneficial = false;
    }else{
        quality.beneficial = true;
    }
    let toBeSaved = new Quality(quality);
    toBeSaved.save()
        .then((quality)=>{
            res.status(204).send({"reply":`new quality ${quality.name} saved.`})
        }).catch((e)=>{
            res.status(500).send({"error": "500 error in server"});
        })
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