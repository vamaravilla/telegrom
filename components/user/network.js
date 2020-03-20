const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req,res){
    controller.addUser(req.body.name) 
    .then((data) =>{
        response.success(req,res,data,201);
    })
    .catch(e =>{
        response.error(req,res,'Error inesperado',500,e);
    })
    
})

router.get('/', function(req,res){

    controller.getUsers()
    .then((data) => {
        response.success(req,res,data, 200)
    })
    .catch(e => {
        response.error(req,res,'Error inesperado',500,e);
    })
})


module.exports = router;