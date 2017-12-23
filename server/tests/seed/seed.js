const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

// Custom Imports
const {Character} = require('../../../models/character');
const {User} = require('../../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

let users = [{
  _id: userOneId,
  email: 'haxxor@gmail.com',
  password: 'eee#@133JMXXswww',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userOneId, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}, {
  _id: userTwoId,
  email: 'l0rd-Nykonn@hotmail.com',
  password: '$$fjdn900!GG',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: userTwoId, access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}];

let characters = [{
  _id: new ObjectID(),
  basic:{
    name:"Glory"
  },
  _creator: userOneId
  },
  {
    _id: new ObjectID(),
    basic:{
      name:"Blitz"
    },
    _creator: userOneId
  },
  {
    _id: new ObjectID(),
    basic:{
      name:"Is0bel"
    },
    _creator: userTwoId
  }];

let newCharacter = {
  basic:{
    name: "Deitrich"
  }
}

const populateCharacters = (done) => {
  Character.remove({}).then(() => {
    return Character.insertMany(characters);
  }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
      let userOne = new User(users[0]).save();
      let userTwo = new User(users[1]).save();
  
      return Promise.all([userOne, userTwo]);
    }).then(() => done());
  };

  module.exports = {populateUsers, populateCharacters, users, characters}