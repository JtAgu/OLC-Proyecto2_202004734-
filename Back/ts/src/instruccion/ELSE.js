"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ELSE = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
class ELSE extends Instruccion_1.Instruccion {
    constructor(Intrucciones, line, column) {
        super(line, column);
        this.Intrucciones = Intrucciones;
    }
    execute2(env) {
    }
    execute(env, sn) {
        if (this.Intrucciones != null) {
            const envElse = new Environment_1.Environment(env);
            for (const x of this.Intrucciones) {
                var x2 = x.execute(envElse, sn);
                if (x2 != undefined) {
                    if (x2) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
    }
}
exports.ELSE = ELSE;
