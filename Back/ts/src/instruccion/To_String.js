"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TO_STRING = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class TO_STRING extends Instruccion_1.Instruccion {
    constructor(expresion, line, column) {
        super(line, column);
        this.expresion = expresion;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let exp = this.expresion.execute(env, sn);
        let result = {
            value: null,
            type: Type_1.Type.error
        };
        if (exp.type != Type_1.Type.STRING) {
            result = {
                value: exp.value,
                type: Type_1.Type.STRING
            };
            return result;
        }
        else {
            sn.addError(new Error_1.Error(" VALOR ERRONEA PARA TO_STRING", "SEMANTICO", this.line, this.column));
        }
        return result;
    }
}
exports.TO_STRING = TO_STRING;
