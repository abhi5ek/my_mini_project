const mongoose =require('mongoose');

const url =process.env.MONGO_URI;

// asynchrounous function
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;