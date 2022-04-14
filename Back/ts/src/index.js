"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Environment_1 = require("./simbolos/Environment");
const parser = require("./grammar/gramatica");
const fs = require("fs");
try {
    const entrada = fs.readFileSync("./entrada.txt");
    const ast = parser.parse(entrada.toString());
    const env = new Environment_1.Environment(null);
    //recorrer las instrucciones y ejecutarlas
    for (const instruccion of ast) {
        try {
            instruccion.execute(env);
        }
        catch (error) {
            console.log(error);
        }
    }
}
catch (error) {
    console.log(error);
}
