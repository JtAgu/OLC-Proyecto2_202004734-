import { Declaracion } from "./instruccion/Declaracion";
import { Environment } from "./simbolos/Environment";
const parser = require("./grammar/gramatica");
const fs = require("fs");

try {
  const entrada = fs.readFileSync("./entrada.txt");
  const ast = parser.parse(entrada.toString());
  const env = new Environment(null);

  //recorrer las instrucciones y ejecutarlas
  for (const instruccion of ast) {
    try {
      instruccion.execute(env);
    } catch (error) {
      console.log(error);
    }
  }
} catch (error) {
  console.log(error);
}