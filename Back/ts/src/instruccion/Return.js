"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RETURN = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
class RETURN extends Instruccion_1.Instruccion {
    constructor(expresion, line, column) {
        super(line, column);
        this.expresion = expresion;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let val = {
            value: null,
            type: Type_1.Type.VOID
        };
        if (this.expresion != null) {
            let exp = this.expresion.execute(env, sn);
            let val = {
                value: exp.value,
                type: exp.type
            };
            return val;
        }
        return val;
    }
}
exports.RETURN = RETURN;
