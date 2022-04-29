"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPEOFF = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class TYPEOFF extends Instruccion_1.Instruccion {
    constructor(expresion, line, column) {
        super(line, column);
        this.expresion = expresion;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let result = {
            value: "",
            type: Type_1.Type.error
        };
        let exp = this.expresion.execute(env, sn);
        if (exp.type == Type_1.Type.ID) {
            result = {
                value: "vector",
                type: Type_1.Type.STRING
            };
        }
        else if (exp.type == Type_1.Type.DECIMAL) {
            result = {
                value: "double",
                type: Type_1.Type.STRING
            };
        }
        else if (exp.type == Type_1.Type.NUMBER) {
            result = {
                value: "int",
                type: Type_1.Type.STRING
            };
        }
        else if (exp.type == Type_1.Type.CHAR) {
            result = {
                value: "char",
                type: Type_1.Type.STRING
            };
        }
        else if (exp.type == Type_1.Type.STRING) {
            result = {
                value: "String",
                type: Type_1.Type.STRING
            };
        }
        else if (exp.type == Type_1.Type.BOOLEAN) {
            result = {
                value: "boolean",
                type: Type_1.Type.STRING
            };
        }
        else {
            sn.addError(new Error_1.Error(" VALOR ERRONEA PARA TYPE_OF", "SEMANTICO", this.line, this.column));
        }
        return result;
    }
    ast(s) {
        const nombreNodo = `node_${this.line}_${this.column}_`;
        return `
        ${nombreNodo};
        ${nombreNodo}[label="TypeOf"];
        ${nombreNodo}->${this.expresion.ast(s)}
        `;
    }
}
exports.TYPEOFF = TYPEOFF;
