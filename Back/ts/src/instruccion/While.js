"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WHILE = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class WHILE extends Instruccion_1.Instruccion {
    constructor(expresion, Intrucciones, line, column) {
        super(line, column);
        this.expresion = expresion;
        this.Intrucciones = Intrucciones;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let exp = this.expresion.execute(env, sn);
        if (exp.type == Type_1.Type.BOOLEAN) {
            while (exp.value) {
                var breakOp = false;
                if (this.Intrucciones != null) {
                    const envWh = new Environment_1.Environment(env);
                    for (const x of this.Intrucciones) {
                        var corte = x.execute(envWh, sn);
                        if (corte != undefined) {
                            if (corte.type == Type_1.Type.BREAK) {
                                breakOp = true;
                                break;
                            }
                            else if (corte.type == Type_1.Type.CONTINUE) {
                                break;
                            }
                            else {
                                return corte;
                            }
                        }
                    }
                    if (breakOp) {
                        breakOp = false;
                        break;
                    }
                }
                exp = this.expresion.execute(env, sn);
            }
        }
        else {
            sn.addError(new Error_1.Error(" Condicion de While debe ser boolean", "SEMANTICO", this.line, this.column));
        }
    }
}
exports.WHILE = WHILE;
