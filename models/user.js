// Model for all User Accounts
const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

const regExpression = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#\$\*\(\)%\^&\*])(?=.{8,})")

// Tokens is for logging on.
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 5,
        unique: true,
        // Validation will also be done on front end
        validate: {
            isAsync: true,
            validator: validator.isEmail,
            message: `{VALUE} is not a valid email`
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 8,
        trim: true,
        validate:{
            validator: function(v){
                return regExpression.test(v);
            },
            message: "Password did not pass complexity requirements"
        }
    },
    characters:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    }],
    tokens: [{
        access: {
          type: String,
          required: true
        },
        token: {
          type: String,
          required: true
        }
      }],
    // Below are the 'optional' entries that users can fill out if they wish.
    name: String,
    gender: String,
    bio: String,
    location: String
});

UserSchema.methods.removeToken = function (token) {
    const userDoc = this;

    // Pull the specified token from the usersdoc's list of Token
    return userDoc.update({
        $pull:{
            tokens:{token}
        }
    })
};
UserSchema.methods.toJSON = function () {
    let user = this.toObject();

    return _.pick(user,["_id","email","name","gender","bio","location"]);
};

UserSchema.methods.generateAuthToken = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({_id: user._id.toHexString(), access}, process.env.JWT_SECRET).toString();
    user.tokens.push({
        access,
        token
    });

    return user.save().then(()=>{
        return token;
    })
};

UserSchema.statics.findByToken = function (token) {
    let User = this;
    let deconded; // Will store a decoded token.

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);

    } catch (e){
        return Promise.reject();
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

UserSchema.statics.findByCredentials = function(email,password) {
    const User = this;
    return User.findOne({email}).then((userDoc)=>{
        if (!userDoc){
            return Promise.reject();
        }

        return new Promise((resolve,reject)=>{
            bcrypt.compare(password,userDoc.password, (err,res)=>{
                if (res){
                    resolve(userDoc);
                }else{
                    reject();
                }
            })
        })
    })
}

UserSchema.pre('save', function(next){
    let user = this;

    if (user.isModified('password')){
        bcrypt.genSalt(13, (err,salt) => {
            bcrypt.hash(user.password, salt, (err,hash) => {
                user.password = hash
                next();
            });
        });
    } else {
        next();
    }
})
const User = mongoose.model('User', UserSchema);

module.exports = {User}