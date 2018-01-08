// Will be the user model

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Quality = require('./quality');

// The Character Schema. Could almost be a schema within Schemas... whoa.
let CharacterSchema = new mongoose.Schema({
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
        type: String
    }]
});

/* Commenting out of now. Suspect that this is better done on the front end.
CharacterSchema.methods.addQuality = function (qualityID){
    let CharacterDoc = this;
    Quality.findById(qualityID).then((quality)=>{
        if(!quality){
            return CharacterDoc;
        };
        jsonQuality = _.pick(quality,['_id','cost','name','description']);
        CharacterDoc.qualities(jsonQuality);
    })
};*/

// Create and export the model.
var Character = mongoose.model('Character', CharacterSchema);
module.exports = {Character};