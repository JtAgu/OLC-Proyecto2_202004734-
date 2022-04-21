"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTINUE = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
class CONTINUE extends Instruccion_1.Instruccion {
    constructor(line, column) {
        super(line, column);
    }
    execute2(env) {
    }
    execute(env, sn) {
        let val = {
            value: true,
            type: Type_1.Type.CONTINUE
        };
        return val;
    }
}
exports.CONTINUE = CONTINUE;
