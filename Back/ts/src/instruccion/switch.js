"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWITCH = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
class SWITCH extends Instruccion_1.Instruccion {
    constructor(Expresion, ListaCase, Default, line, column) {
        super(line, column);
        this.Expresion = Expresion;
        this.ListaCase = ListaCase;
        this.Default = Default;
    }
    execute(env) {
        if (this.ListaCase != null) {
            const envSw = new Environment_1.Environment(env);
            let expN = this.Expresion.execute(env);
            let br = false;
            for (const x of this.ListaCase) {
                let exp;
                exp = x.ExpresionC.execute(env);
                if (exp.type == expN.type && exp.value == expN.value) {
                    br = x.execute(envSw);
                }
                if (br) {
                    break;
                }
            }
            if (!br) {
                if (this.Default != null) {
                    for (const x of this.Default) {
                        x.execute(envSw);
                    }
                }
            }
        }
    }
}
exports.SWITCH = SWITCH;
