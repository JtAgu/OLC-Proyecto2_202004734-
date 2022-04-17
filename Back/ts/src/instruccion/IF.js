"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IF = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
class IF extends Instruccion_1.Instruccion {
    constructor(expresion, Intrucciones, SigIf, line, column) {
        super(line, column);
        this.expresion = expresion;
        this.Intrucciones = Intrucciones;
        this.SigIf = SigIf;
    }
    execute(env) {
        let exp = this.expresion.execute(env);
        if (exp.type == Type_1.Type.BOOLEAN) {
            if (Boolean(exp.value) == Boolean(true)) {
                if (this.Intrucciones != null) {
                    const envIf = new Environment_1.Environment(env);
                    for (const x of this.Intrucciones) {
                        x.execute(envIf);
                    }
                }
            }
            else {
                if (this.SigIf != null) {
                    this.SigIf.execute(env);
                }
            }
        }
    }
}
exports.IF = IF;
