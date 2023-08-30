const {Schema, model} = require('../connections');

const myschema = new Schema({
    name: String,
    description: String,
    technology: String
});

module.exports = model('project',myschema);