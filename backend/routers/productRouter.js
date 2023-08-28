const express = require("express");
const Model = require('../models/productModel');

const router = express.Router();

router.post('/addProduct',(req, res) => {
    console.log(res.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getProduct',(req,res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.delete('/delete/:id', (req, res) => {
    // res.send('Response from user delete')
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

module.exports = router;
