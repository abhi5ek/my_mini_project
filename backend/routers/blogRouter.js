const express = require("express");
const Model = require('../models/blogModel');

const router = express.Router();

//addblog
router.post('/addblog',(req,res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    // res.send("Respone from blog addblog");
});

//getbyid
router.get('/getbyid',(req,res) => {
    res.send("Respone from blog getbyid");
});

//getall
router.get('/getall',(req,res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
    // res.send("Respone from blog getall");
});

module.exports = router;