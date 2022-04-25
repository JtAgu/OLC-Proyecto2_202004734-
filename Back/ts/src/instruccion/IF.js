"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IF = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class IF extends Instruccion_1.Instruccion {
    constructor(expresion, Intrucciones, SigIf, line, column) {
        super(line, column);
        this.expresion = expresion;
        this.Intrucciones = Intrucciones;
        this.SigIf = SigIf;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let exp = this.expresion.execute(env, sn);
        if (exp.type == Type_1.Type.BOOLEAN) {
            if (Boolean(exp.value) == Boolean(true)) {
                if (this.Intrucciones != null) {
                    const envIf = new Environment_1.Environment(env);
                    for (const x of this.Intrucciones) {
                        var corte = x.execute(envIf, sn);
                        if (corte != undefined) {
                            return corte;
                        }
                    }
                }
            }
            else {
                if (this.SigIf != null) {
                    this.SigIf.execute(env, sn);
                }
            }
        }
        else {
            sn.addError(new Error_1.Error(" Condicion de IF debe ser boolean", "SEMANTICO", this.line, this.column));
        }
    }
}
exports.IF = IF;
