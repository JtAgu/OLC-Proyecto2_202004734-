"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMatriz = void 0;
const express_1 = require("../abstract/express");
const Error_1 = require("../instruccion/Error");
const Type_1 = require("../simbolos/Type");
class GetMatriz extends express_1.Expression {
    constructor(IdName, num, num2, line, column) {
        super(line, column);
        this.IdName = IdName;
        this.num = num;
        this.num2 = num2;
    }
    execute(env, sn) {
        let exp = this.num.execute(env, sn);
        let exp2 = this.num2.execute(env, sn);
        let result = {
            value: null,
            type: Type_1.Type.error
        };
        if (env.buscar_variable(this.IdName)) {
            if (exp.type == Type_1.Type.NUMBER && exp2.type == Type_1.Type.NUMBER && exp.value < env.getDim1_Matriz(this.IdName) && exp2.value < env.getDim2_Matriz(this.IdName)) {
                if (env.getDimension_variable(this.IdName) == 3) {
                    result = {
                        value: env.getValue_Matriz(this.IdName, Number(exp.value), Number(exp2.value)),
                        type: env.getTipo_variable(this.IdName)
                    };
                }
                else {
                    sn.addError(new Error_1.Error("la variable [" + this.IdName + "] tiene una dimencion diferente...", "SEMANTICO", this.line, this.column));
                }
            }
            else {
                sn.addError(new Error_1.Error("la llamda de [" + this.IdName + "] no se efectuo corrextamente...", "SEMANTICO", this.line, this.column));
            }
        }
        else {
            sn.addError(new Error_1.Error("la variable [" + this.IdName + "] no fue encontrada...", "SEMANTICO", this.line, this.column));
        }
        return result;
    }
    ast(salida) {
        const name_nodo = `node_${this.line}_${this.column}_`;
        return `
        ${name_nodo};
        ${name_nodo}[label="ID_${this.IdName}"];
        `;
    }
}
exports.GetMatriz = GetMatriz;
