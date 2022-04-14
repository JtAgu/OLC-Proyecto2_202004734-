const express=require('express')
const routes=express.Router()
var entrada='';

routes.get('/',function(req,res){
    res.json({msg:entrada})
});

routes.post('/SetFile',function(req,res){
    entrada=req.body.msg
    res.send(req.body.msg)
})

module.exports=routes
