const express=require('express')
const routes=express.Router()
var entrada='';
var salidaMSG='';

routes.get('/',function(req,res){
    res.json({msg:entrada})
});

routes.post('/SetFile',function(req,res){
    entrada=req.body.msg
    res.send(req.body.msg)
})

routes.get('/Ejecutar',function(req,res){
    salida="";
    const Environment_1 = require("./ts/src/simbolos/Environment");
    const parser = require("./ts/src/grammar/gramatica");
    const ast = parser.parse(entrada.toString());
    const env = new Environment_1.Environment(null);
    var salida=new Singleton();
  //recorrer las instrucciones y ejecutarlas
  
  var i=0,j=[];
  for (const instruccion of ast) {
    try {
      i++;
      let ins=instruccion.execute(env,salida);
      if(ins!=undefined){
        if(ins=="RUN"){
          j.push(instruccion);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  for(const run of j){
    run.execute2(env,salida);
  }
  
    salidaMSG=salida.getMsg();
    res.json({msg:salidaMSG})
})

module.exports=routes
