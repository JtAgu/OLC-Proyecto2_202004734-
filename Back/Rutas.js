const express=require('express')
const routes=express.Router()
var entrada='';
var salida='';

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
    //recorrer las instrucciones y ejecutarlas
    for (const instruccion of ast) {
        try {
            var s=instruccion.execute(env);
            if(s!=undefined){
                salida+=s;
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    res.json({msg:salida})
})

module.exports=routes
