"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWITCHCASE = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
class SWITCHCASE extends Instruccion_1.Instruccion {
    constructor(ExpresionC, ListaIns, PBreak, line, column) {
        super(line, column);
        this.ExpresionC = ExpresionC;
        this.ListaIns = ListaIns;
        this.PBreak = PBreak;
    }
    execute(env) {
        if (this.ListaIns != null) {
            for (const x of this.ListaIns) {
                x.execute(env);
            }
        }
        if (this.PBreak != null) {
            return true;
        }
        return false;
    }
}
exports.SWITCHCASE = SWITCHCASE;
