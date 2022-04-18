"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WHILE = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
class WHILE extends Instruccion_1.Instruccion {
    constructor(expresion, Intrucciones, line, column) {
        super(line, column);
        this.expresion = expresion;
        this.Intrucciones = Intrucciones;
    }
    execute(env) {
        let exp = this.expresion.execute(env);
        if (exp.type == Type_1.Type.BOOLEAN) {
            while (exp.value) {
                if (this.Intrucciones != null) {
                    const envWh = new Environment_1.Environment(env);
                    for (const x of this.Intrucciones) {
                        x.execute(envWh);
                    }
                }
                exp = this.expresion.execute(env);
            }
        }
    }
}
exports.WHILE = WHILE;
