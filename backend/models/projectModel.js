const {Schema, model} = require('../connections');

const myschema = new Schema({
    name: String,
    avatar: String,
    description: String,
    technology: String,
    days: String,
    price: String,
});

module.exports = model('project',myschema);