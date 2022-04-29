"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Funcion_1 = require("./instruccion/Funcion");
const run_1 = require("./instruccion/run");
const singleton_1 = require("./patrondiseno/singleton");
const Environment_1 = require("./simbolos/Environment");
const parser = require("./grammar/gramatica");
const fs = require("fs");
try {
    const entrada = fs.readFileSync("./2.txt");
    const ast = parser.parse(entrada.toString());
    const env = new Environment_1.Environment(null, "PRINCIPAL");
    var salida = singleton_1.Singleton.getInstance();
    ;
    //recorrer las instrucciones y ejecutarlas
    var i = 0, j = [];
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
        }
        catch (error) {
            console.log(error);
        }
    }
    for (const run of j) {
        run.execute2(env, salida);
    }
    for (const instruccion of ast[0]) {
        try {
            i++;
            if (instruccion instanceof run_1.RUN || instruccion instanceof Funcion_1.Funcion) {
            }
            else {
                instruccion.execute(env, salida);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(salida.getMsg());
    //console.log(env.getEnv())
}
catch (error) {
    console.log(error);
}
