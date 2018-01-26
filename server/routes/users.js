// Npm Module imports
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');
const router = express.Router();

// More custom Modules
const {authenticate} = require('../middleware/authenticate');
const {User} = require('../../models/user');
const {mongoose} = require('../../db/mongoose');
const {allowCrossDomain} = require('../middleware/corsmiddle');

// Add a new user
router.post('/',(req,res)=>{
    let body = _.pick(req.body,["email","password"]);
    let user = new User(body);

    user.save().then(() => {
        // Generates auth token. Passes to next .then()
        return user.generateAuthToken();
    }).then((token)=>{
        res.status(201).header('x-auth',token).send();
    }).catch((e)=>{
        res.status(500).send(_.pick(e,["code","errmsg"]));
    })
});

router.get('/me', authenticate, (req,res) => {
    res.send(req.user);
});

// Login and Log out functionality
router.post('/login', (req, res)=>{
    let creds = _.pick(req.body,["email","password"]);
    // Gets the userDoc from database if password is good
    User.findByCredentials(creds.email,creds.password)
        .then((userDoc)=>{
            return userDoc.generateAuthToken()
            .then((token)=>{
                res.status(200).header('x-auth',token).send();
            });
        })
        .catch((e)=>{
            res.status(500).send(e);
        })
});

router.patch('/me/changepass', authenticate,(req,res)=>{
    let oldpw = req.body.old;
    let newpw = req.body.new;
    let id = req.user._id;
    User.findById(id)
        .then((userDoc)=>{
            if (!userDoc){
                res.status(404).send({"error":"user account not found"})
            };
            userDoc.password = newpw;
            userDoc.tokens = [];
            userDoc.save().then(() => {
                // Generates auth token. Passes to next .then()
                return userDoc.generateAuthToken();
            }).then((token)=>{
                res.status(200).header('x-auth',token).send();
            }).catch((e)=>{
                res.status(500).send(_.pick(e,["code","errmsg"]));
            })
        })
});

router.delete('/me/token', authenticate, (req, res) => {
    // req.token is added by the authenticate middle ware
    // Will not remove multiple auth tokens. Only a specific one.
    req.user.removeToken(req.token).then(() => {
      res.status(204).send();
    }, () => {
      res.status(500).send();
    });
});

module.exports = router;
