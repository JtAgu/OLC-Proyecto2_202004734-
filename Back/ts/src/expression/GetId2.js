"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetId2 = void 0;
const express_1 = require("../abstract/express");
const Error_1 = require("../instruccion/Error");
const Type_1 = require("../simbolos/Type");
class GetId2 extends express_1.Expression {
    constructor(IdName, line, column) {
        super(line, column);
        this.IdName = IdName;
    }
    execute(env, sn) {
        let result = {
            value: null,
            type: Type_1.Type.error
        };
        if (env.buscar_variable(this.IdName)) {
            if (env.getDimension_variable(this.IdName) == 1) {
                result = {
                    value: env.getValue_variable(this.IdName),
                    type: env.getTipo_variable(this.IdName)
                };
            }
            else if (env.getDimension_variable(this.IdName) == 2) {
                result = {
                    value: env.getDim1_Vector(this.IdName),
                    type: Type_1.Type.ID
                };
            }
            else {
                var d1 = env.getDim1_Matriz(this.IdName);
                var d2 = env.getDim2_Matriz(this.IdName);
                var d = Number(d1) * Number(d2);
                result = {
                    value: d,
                    type: Type_1.Type.ID
                };
            }
        }
        else {
            sn.addError(new Error_1.Error("la variable [" + this.IdName + "] no fue encontrada...", "SEMANTICO", this.line, this.column));
        }
        return result;
    }
}
exports.GetId2 = GetId2;
