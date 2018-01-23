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
            res.status(201).send({
                "reply":`new quality ${quality.name} saved.`,
                "quality": quality
            })
        }).catch((e)=>{
            res.status(500).send({"error": "500 error in server"});
        })
});

router.get('/getone/:id',(req,res)=>{
    const id = req.params.id;
    Quality.findOne({"_id": id})
        .then((quality)=>{
            if (!quality){
                return res.status(404).send({"error":"This quality was not found"})
            }
            return res.status(200).send(quality);
        }).catch((e)=>{
            res.status(500).send({"error":"Server error occurred"});
        })
});

router.patch('/editone/:id',(req,res)=>{
    // will edit one quality in the database.
    // will always expect {name, cost, description}
    const id = req.params.id;
    const update = req.body;
    if (update.cost < 0 ){
        update.beneficial = false;
    }else{
        update.beneficial = true;
    };
    Quality.findOneAndUpdate({
        "_id": id
    },{$set:update},{new: true,runValidators: true})
        .then((updatedStuff)=>{
            if (!updatedStuff){
                return res.status(404).send({"error":"Did not find this quality"})
            };
            return res.status(204).send({"reply":`updated quality ${updatedStuff.name}`});
        });
});

router.get('/getall',(req,res)=>{
    Quality.find()
    .then((everything)=>{
        if (!everything){
            return res.status(404).send({"error":"database found nothing"});
        };
        res.status(200).send(everything); // send EVERYTHING!
    }).catch((e)=>{
        res.status(500).send({"error":"Server error occurred"});
    })
});

router.get('/getone/:id',(req,res)=>{
    const id = req.params.id;
    Quality.findOne()
    .then((quality)=>{
        if (!quality){
            return res.status(404).send({"error":"did not find quality"});
        };
        res.status(200).send(quality);
    }).catch((e)=>{
        res.status(500).send({"error":"Server error occurred"});
    })
});

router.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    Quality.findOneAndRemove({_id:id})
    .then((deleted)=>{
        if (!deleted){
            return res.status(404).send({"error":"could not find anything to delete"});
        }
        res.status(204).send(deleted);
    });
});

module.exports = router;