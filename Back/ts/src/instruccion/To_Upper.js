"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TO_UPPER = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class TO_UPPER extends Instruccion_1.Instruccion {
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
        if (exp.type == Type_1.Type.STRING) {
            result = {
                value: exp.value.toUpperCase(),
                type: Type_1.Type.STRING
            };
            return result;
        }
        else {
            sn.addError(new Error_1.Error(" VALOR ERRONEA PARA TO_UPPER", "SEMANTICO", this.line, this.column));
        }
        return result;
    }
    ast(s) {
        const nombreNodo = `node_${this.line}_${this.column}_`;
        return `
      ${nombreNodo};
      ${nombreNodo}[label="To_Upper"];
      ${nombreNodo}->${this.expresion.ast(s)}
      `;
    }
}
exports.TO_UPPER = TO_UPPER;
