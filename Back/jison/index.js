var fs= require('fs');
var parser=require('./gramatica');


fs.readFile('./prueba.txt',(err,data)=>{
    console.log(data.toString());
    if(err) throw err;
    parser.parse(data.toString());
    

});