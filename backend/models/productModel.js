const {Schema, model} = require('../connections');

const myschema = new Schema({
    name : String,
    model : String,
    image : String,
    price : String
});

module.exports = model('product', myschema );