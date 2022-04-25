"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetVector = void 0;
const express_1 = require("../abstract/express");
const Error_1 = require("../instruccion/Error");
const Type_1 = require("../simbolos/Type");
class GetVector extends express_1.Expression {
    constructor(IdName, num, line, column) {
        super(line, column);
        this.IdName = IdName;
        this.num = num;
    }
    execute(env, sn) {
        let exp = this.num.execute(env, sn);
        let result = {
            value: null,
            type: Type_1.Type.error
        };
        if (env.buscar_variable(this.IdName)) {
            if (exp.type == Type_1.Type.NUMBER && exp.value < env.getDim1_Vector(this.IdName)) {
                if (env.getDimension_variable(this.IdName) == 2) {
                    result = {
                        value: env.getValue_Vector(this.IdName, Number(exp.value)),
                        type: env.getTipo_variable(this.IdName)
                    };
                }
                else {
                    sn.addError(new Error_1.Error("la variable [" + this.IdName + "] tiene una dimension diferente...", "SEMANTICO", this.line, this.column));
                }
            }
            else {
                sn.addError(new Error_1.Error("la variable [" + this.IdName + "] no se efectuo corrextamente...", "SEMANTICO", this.line, this.column));
            }
        }
        else {
            sn.addError(new Error_1.Error("la variable [" + this.IdName + "] no fue encontrada...", "SEMANTICO", this.line, this.column));
        }
        return result;
    }
}
exports.GetVector = GetVector;
