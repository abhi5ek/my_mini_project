const {Schema, model} = require('../connections');

const myschemaa = new Schema({
    title: String,
    description: String,
    image: String,
    content: String
});

module.exports = model('blog', myschemaa );
// title : string,
// description : String,
//image : String,
// content : String