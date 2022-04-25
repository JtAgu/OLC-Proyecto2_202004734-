"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FOR = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class FOR extends Instruccion_1.Instruccion {
    constructor(Param1, expresionB, Param2, Intrucciones, line, column) {
        super(line, column);
        this.Param1 = Param1;
        this.expresionB = expresionB;
        this.Param2 = Param2;
        this.Intrucciones = Intrucciones;
    }
    execute2(env) {
    }
    execute(env, sn) {
        const envFor = new Environment_1.Environment(env);
        this.Param1.execute(envFor, sn);
        let exp = this.expresionB.execute(envFor, sn);
        if (exp.type == Type_1.Type.BOOLEAN) {
            while (Boolean(exp.value)) {
                const envFor2 = new Environment_1.Environment(envFor);
                var breakOp = false;
                if (this.Intrucciones != null) {
                    for (const x of this.Intrucciones) {
                        var corte = x.execute(envFor2, sn);
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
                this.Param2.execute(envFor, sn);
                exp = this.expresionB.execute(envFor, sn);
            }
        }
        else {
            sn.addError(new Error_1.Error(" Condicion de for debe ser boolean", "SEMANTICO", this.line, this.column));
        }
    }
}
exports.FOR = FOR;
