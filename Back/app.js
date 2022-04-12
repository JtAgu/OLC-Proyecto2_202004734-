var express= require('express');
var morgan =require('morgan');
var app=express();
var cors=require('cors');

var Texto="Texto de prueba";

const routesEstablecimiento= require('./Peticiones')


app.use(morgan('dev'));
app.use(cors())
app.use(express.urlencoded({extended:true}));



app.listen(8080,function(){
    console.log("Escuchando en el 8080");
})


app.get('/',function(req,res){
    res.json({mensaje:'hola mundo'})
});

app.get('/GetTextFile',function(req,res){
    console.log("Intente")
    res.json({text:Texto})
});

app.post('/EnterFile',function(req,res){
    fs.readFile(ruta,(err,data)=>{
        if(err) throw err;
            parser.parse(data.toString());
            Texto=data.toString();
    });
    var ruta =req.body.ruta
})

app.post('/setIncremental',function(req,res){
    incremental=req.body.dato
    var texto =req.body.texto
    res.json({msg:'operacion con exito'})
})

