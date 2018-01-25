const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

// custom imports
const {Character} = require('../../models/character');
const {mongoose} = require('../../db/mongoose');
const {authenticate} = require('../middleware/authenticate');

function clipdoc(document) {
    // Removes non essential database information
    // from getting returned to the front end.
    // This is currently not working becuase lodash.
    let newdoc = _.omit(document,["_id","__v","_creator"]);
    return newdoc;
};
router.delete('/delete/',authenticate,(req,res)=>{
    let id = req.body.id;
    let userID = req.user._id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    };
    Character.findOneAndRemove({
        _id:id,
        _creator: userID
    }).then((deleted)=>{
        if (!deleted){
            return res.status(404).send({"error":"could not find a character matches sent parameters"});
        }
        res.send(deleted);
    }).catch((e)=>{
        res.status(500).send();
    })
});

// Make New Character
router.post("/postnew",authenticate,(req,res)=>{
    const now = new Date();
    const character = new Character({
        _creator: req.user._id,
        basic: req.body.basic,
        attributes: req.body.attributes,
        createdOn: now,
        skills: req.body.skills,
        qualities: req.body.qualities
    });
    character.save().then((doc)=>{
        res.status(200).send(doc);
    }, (e)=>{
        res.status(500).send();
    })
});

// Get one Character
router.get("/getone/:id",authenticate,(req,res)=>{
    const charID = req.params.id;
    Character.findOne({"_creator":req.user._id,"_id":charID})
        .then((character)=>{
            if (character){
                return res.status(200).send(clipdoc(character));
            }
            return res.status(404).send({"error":`Did not find Character with id ${charID}`});
        })
        .catch((e)=>{
            res.status(500).send();
        });
});

// Modify a character
router.patch("/update/:id",authenticate,(req,res)=>{
    const charID = req.params.id;
    // each update will be set on the front end.
    // e.g. reqbody would equal  {"attributes.body": 4, "karma":5, "basic.name":"Some new name"}
    const updateBody = req.body;
    const userID = req.user._id;
    Character.findOneAndUpdate({
        "_creator": userID,
        "_id": charID
    },{$set:updateBody},{new: true,runValidators: true})
        .then((updatedStuff)=>{
            console.log(updatedStuff)
            if(!updatedStuff){
                return res.status(404).send({"error":"did not find this character"})
            }
            
            res.status(200).send(clipdoc(updatedStuff));
        }).catch((e)=>{
            res.status(500).send();
        });
});

// Get all the Characters
router.get("/getall",authenticate,(req,res)=>{
    let _id = req.user._id;
    Character.find({
        _creator: _id
    }).then((runners)=>{
        let array = []
        runners.forEach((runner)=>{
            array.push(clipdoc(runner));
        });
        res.status(200).send(array);
    }).catch((e)=>{
        res.status(500).send();
    })
});

module.exports = router;