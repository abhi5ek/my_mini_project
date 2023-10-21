const {Schema, model} = require('../connections');

const myschema = new Schema({
    email : String,
    password : String,
});

module.exports = model('user', myschema );