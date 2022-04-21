"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = require("./patrondiseno/singleton");
const Environment_1 = require("./simbolos/Environment");
const parser = require("./grammar/gramatica");
const fs = require("fs");
try {
    const entrada = fs.readFileSync("./entrada.txt");
    const ast = parser.parse(entrada.toString());
    const env = new Environment_1.Environment(null);
    var salida = new singleton_1.Singleton();
    //recorrer las instrucciones y ejecutarlas
    var i = 0, j = [];
    for (const instruccion of ast) {
        try {
            i++;
            let ins = instruccion.execute(env, salida);
            if (ins != undefined) {
                if (ins == "RUN") {
                    j.push(instruccion);
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    for (const run of j) {
        run.execute2(env, salida);
    }
    console.log(salida.getMsg());
}
catch (error) {
    console.log(error);
}
