"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Print = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
class Print extends Instruccion_1.Instruccion {
    constructor(expresion, line, column) {
        super(line, column);
        this.expresion = expresion;
    }
    execute(env) {
        let exp = this.expresion.execute(env);
        console.log(exp.value);
        //pueden usar patron singleton para capturar todas las saliddas de consola
        return exp.value;
    }
}
exports.Print = Print;
