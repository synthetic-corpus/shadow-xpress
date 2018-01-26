// Will be the user model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Quality = require('./quality');
const Skill = require('./skills');

// The Character Schema. Could almost be a schema within Schemas... whoa.
const CharacterSchema = new mongoose.Schema({
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    createdOn: Date,
    basic: {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        metatype: {
            type: String
        },
        age: {
            type: Number
        },
        gender: {
            type: String
        },
        height: {
            type: Number
        },
        weight: {
            type: Number
        },
        alias: [
            String
        ]
    },
    resources: {
        type: Number,
        default: 0
    },
    karma: {
        type: Number,
        default: 0
    },
    attributes: {
        // Physical Attributes
        bod: {
            type: Number,
            default: 0
        },
        agi: {
            type: Number,
            default: 0
        },
        rea: {
            type: Number,
            default: 0
        },
        str: {
            type: Number,
            default: 0
        },
        // Mental Attributes
        wil: {
            type: Number,
            default: 0
        },
        log: {
            type: Number,
            default: 0
        },
        int: {
            type: Number,
            default: 0
        },
        cha: {
            type: Number,
            default: 0
        },
        // Special Attributes
        edg: {
            type: Number,
            default: 0
        },
        ess: {
            type: Number,
            default: 0
        },
        ini: {
            type: Number,
            default: 0
        },
        mag: {
            type: Number,
            default: 0
        },
        res: {
            type: Number,
            default: 0
        }
    },
    // Modifiers will likely be set programatically.
    conditions: {
        physical:{
            boxes: Number,
            modifiers: {
                type: Number,
                default: 0
            }
        },
        mental : {
            boxes: Number,
            modifiers: {
                type: Number,
                default: 0
            }
        }
    },
    qualities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Quality
    }],
    skills: [
        { 
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: Skill
            },
            rank: Number
        }
    ]
});

// Create and export the model.
const Character = mongoose.model('Character', CharacterSchema);
module.exports = {Character};