"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logic = void 0;
const express_1 = require("../abstract/express");
const Error_1 = require("../instruccion/Error");
const Type_1 = require("../simbolos/Type");
const logicOption_1 = require("./logicOption");
class logic extends express_1.Expression {
    constructor(left, right, type, line, column) {
        super(line, column);
        this.left = left;
        this.right = right;
        this.type = type;
    }
    execute(env, sn) {
        let result = {
            value: null,
            type: Type_1.Type.error
        };
        const nodoIzq = this.left.execute(env, sn);
        const nodoDer = this.right.execute(env, sn);
        if (this.type == logicOption_1.LogicOption.NOT) {
            if (nodoDer.type == Type_1.Type.BOOLEAN) {
                if (Boolean(nodoDer.value)) {
                    result = {
                        value: Boolean(false),
                        type: Type_1.Type.BOOLEAN
                    };
                }
                else {
                    result = {
                        value: Boolean(true),
                        type: Type_1.Type.BOOLEAN
                    };
                }
            }
            else {
                sn.addError(new Error_1.Error("Valores incorrectos para NOT", "SEMANTICO", this.line, this.column));
                console.log("error semantico, valores incorrectos para [" + this.type + "]");
            }
        }
        else if (this.type == logicOption_1.LogicOption.AND) {
            if (nodoIzq.type == Type_1.Type.BOOLEAN && nodoDer.type == Type_1.Type.BOOLEAN) {
                console.log(nodoIzq.value, "And", nodoDer.value);
                if (Boolean(nodoIzq.value) && Boolean(nodoDer.value)) {
                    console.log("Si");
                    result = {
                        value: Boolean(true),
                        type: Type_1.Type.BOOLEAN
                    };
                }
                else {
                    result = {
                        value: Boolean(false),
                        type: Type_1.Type.BOOLEAN
                    };
                }
            }
            else {
                sn.addError(new Error_1.Error("Valores incorrectos para AND", "SEMANTICO", this.line, this.column));
                console.log("error semantico, valores incorrectos para [" + this.type + "]");
            }
        }
        else if (this.type == logicOption_1.LogicOption.OR) {
            if (nodoIzq.type == Type_1.Type.BOOLEAN && nodoDer.type == Type_1.Type.BOOLEAN) {
                console.log(nodoIzq.value, "Or", nodoDer.value);
                if (Boolean(nodoIzq.value) || Boolean(nodoDer.value)) {
                    console.log("Si");
                    result = {
                        value: Boolean(true),
                        type: Type_1.Type.BOOLEAN
                    };
                }
                else {
                    result = {
                        value: Boolean(false),
                        type: Type_1.Type.BOOLEAN
                    };
                }
            }
            else {
                sn.addError(new Error_1.Error("Valores incorrectos para OR", "SEMANTICO", this.line, this.column));
                console.log("error semantico, valores incorrectos para [" + this.type + "]");
            }
        }
        return result;
    }
    ast(salida) {
        const nombreNodo = `node_${this.line}_${this.column}_`;
        if (this.type != logicOption_1.LogicOption.NOT) {
            return `
        ${nombreNodo};
        ${nombreNodo}[label="${(0, logicOption_1.get_simbolo)(this.type)}"];
        ${nombreNodo}->${this.left.ast(salida)}
        ${nombreNodo}->${this.right.ast(salida)}
        `;
        }
        return `
        ${nombreNodo};
        ${nombreNodo}[label="${(0, logicOption_1.get_simbolo)(this.type)}"];
        ${nombreNodo}->${this.left.ast(salida)}
        `;
    }
}
exports.logic = logic;
