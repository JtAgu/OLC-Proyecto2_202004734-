"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWITCH = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
class SWITCH extends Instruccion_1.Instruccion {
    constructor(Expresion, ListaCase, Default, line, column) {
        super(line, column);
        this.Expresion = Expresion;
        this.ListaCase = ListaCase;
        this.Default = Default;
    }
    execute2(env) {
    }
    execute(env, sn) {
        if (this.ListaCase != null) {
            const envSw = new Environment_1.Environment(env);
            let expN = this.Expresion.execute(env, sn);
            let br = false;
            for (const x of this.ListaCase) {
                let exp = x.ExpresionC.execute(env, sn);
                if (exp.type == expN.type && exp.value == expN.value) {
                    var corte = x.execute(envSw, sn);
                    expN = this.Expresion.execute(env, sn);
                    if (corte.type == Type_1.Type.BREAK) {
                        br = true;
                        break;
                    }
                }
            }
            if (!br) {
                if (this.Default != null) {
                    for (const x of this.Default) {
                        x.execute(envSw, sn);
                    }
                }
            }
        }
    }
}
exports.SWITCH = SWITCH;
