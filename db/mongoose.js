// Is used for our lovely Mongoosing
const mongoose = require('mongoose');


const options = {
    useMongoClient: true
}
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI,options);

module.exports = {mongoose};