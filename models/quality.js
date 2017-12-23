// Qualities. Will not be things that can be added but hard coded into the database somehow. Sure. Why not?

let mongoose = require('mongoose');

let qualityObject = {
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required:true
    }
}

let Quality = mongoose.model("Qualities",qualityObject)