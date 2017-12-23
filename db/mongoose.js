// Is used for our lovely Mongoosing
let mongoose = require('mongoose');


let options = {
    useMongoClient: true
}
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI,options);

module.exports = {mongoose};