const {Schema, model} = require('../connections');

const myschema = new Schema({
    name : String,
    email : String,
    password : String,
    age : Number,
    avatar : String
});

module.exports = model('user', myschema );