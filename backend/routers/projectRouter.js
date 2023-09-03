const express = require('express');
const Model = require('../models/projectModel');

const router = express.Router();

//addproject
router.post('/addproject',(req,res) => {
    console.log(res.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);

    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
});

//get project
router.get('/getproject',(req,res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });
})

//delete project
router.delete('/delproject/:id',(req,res) => {
     Model.findByIdAndDelete(req.params.id)
     .then((result) => {
        res.json(result)
     }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
     });
});

//view project
router.get('/viewproject/:id',(req,res) => {
     Model.findById(req.params.id)
     .then((result) => {
        res.json(result)
     }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
     });
});

module.exports = router;