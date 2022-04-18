"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOWHILE = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
class DOWHILE extends Instruccion_1.Instruccion {
    constructor(Intrucciones, expresion, line, column) {
        super(line, column);
        this.Intrucciones = Intrucciones;
        this.expresion = expresion;
    }
    execute(env) {
        let exp = this.expresion.execute(env);
        if (exp.type == Type_1.Type.BOOLEAN) {
            do {
                if (this.Intrucciones != null) {
                    const envWh = new Environment_1.Environment(env);
                    for (const x of this.Intrucciones) {
                        x.execute(envWh);
                    }
                }
                exp = this.expresion.execute(env);
            } while (exp.value);
        }
    }
}
exports.DOWHILE = DOWHILE;
