import { Instruccion } from "./abstract/Instruccion";
import { Declaracion } from "./instruccion/Declaracion";
import { Funcion } from "./instruccion/Funcion";
import { RUN } from "./instruccion/run";
import { Singleton } from "./patrondiseno/singleton";
import { Environment } from "./simbolos/Environment";


const parser = require("./grammar/gramatica");
const fs = require("fs");

try {
  const entrada = fs.readFileSync("./2.txt");
  const ast = parser.parse(entrada.toString());
  const env = new Environment(null, "PRINCIPAL");
  var salida = Singleton.getInstance();;
  //recorrer las instrucciones y ejecutarlas



  var i = 0, j: Array<Instruccion> = [];

  //console.log(salida.getError());
  for (const instruccion of ast[0]) {
    try {
      i++;

      let ins = instruccion.execute(env, salida);
      if (ins != undefined) {
        if (ins == "RUN") {
          j.push(instruccion);
        }
      }

      
    } catch (error) {
      console.log(error);
    }
  }
  for (const run of j) {
    run.execute2(env, salida);
  }

  for (const instruccion of ast[0]) {
        
    try {
        i++;
        if (instruccion instanceof RUN || instruccion instanceof Funcion) {

        }else {
            instruccion.execute(env, salida);
        }
    }
    catch (error) {
        console.log(error);
    }
}
console.log(salida.getMsg())
  //console.log(env.getEnv())
} catch (error) {
  console.log(error);
}
