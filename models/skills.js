// Skills now. Which will also have its add and delete paths.

const mongoose = require('moongoose');

const singleSkill = {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    specializations: [String],
    group: {
        type: String,
        default: 'none'
    },
    type: {
        type: String,
        required: true,
        default: 'active'
    }
};

const Skill = mongoose.model("Skills",singleSkill);

module.exports = { Skill };