"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintLn = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
class PrintLn extends Instruccion_1.Instruccion {
    constructor(expresion, line, column) {
        super(line, column);
        this.expresion = expresion;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let exp = this.expresion.execute(env, sn);
        sn.addMsg(exp.value + '\n');
        //return exp.value+"\n"
    }
}
exports.PrintLn = PrintLn;
