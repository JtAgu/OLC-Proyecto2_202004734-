var express= require('express');
var morgan =require('morgan');
var app=express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));



app.listen(8080,function(){
    console.log("Escuchando en el 8080");
})


app.get('/',function(req,res){
    res.json({mensaje:'hola mundo'})
});


app.get('/',function(req,res){
    res.send('Este mensaje es un texto')
});

app.post('/setIncremental',function(req,res){
    incremental=req.body.dato
    var texto =req.body.texto
    res.json({msg:'operacion con exito'})
})