const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const _ = require('lodash');

// Custom imports
const { Skill } = require('../../models/skills');

router.post('/new/',(req, res) => {
    // Post to the Mongo!
    const toBeSaved = new Skill(req.body);
    toBeSaved.save()
        .then((skill)=>{
            return res.status(201).send({
                "reply": `New Skill ${skill.name} added to database`,
                "skill": skill
            })
        })
});

router.patch('/edit/:id', (req,res)=>{
    // Change one in the Mongo!
});

router.get('/getall', (req,res)=>{
    // Get all the skills!
});

router.get('getone/:id', (req,res)=>{
    const id = req.params.id;
    Skill.findOne({"_id":id})
        .then((skill)=>{
            if (!skill){
                return res.status(404).send({"error":"This quality was not found"})
            }
            return res.status(200).send(skill);
        }).catch((e)=>{
            return res.status(500).send({"error": "500 error in server"});
        })
});

router.delete('/deleteone/:id', (req,res)=>{
    // Delete one of the skills!!
})

module.exports = router;