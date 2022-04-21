import { Instruccion } from "./abstract/Instruccion";
import { Declaracion } from "./instruccion/Declaracion";
import { Singleton } from "./patrondiseno/singleton";
import { Environment } from "./simbolos/Environment";
const parser = require("./grammar/gramatica");
const fs = require("fs");

try {
  const entrada = fs.readFileSync("./entrada.txt");
  const ast = parser.parse(entrada.toString());
  const env = new Environment(null);
  var salida=new Singleton();
  //recorrer las instrucciones y ejecutarlas
  
  var i=0,j:Array<Instruccion>=[];
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
  console.log(salida.getMsg());
} catch (error) {
  console.log(error);
}