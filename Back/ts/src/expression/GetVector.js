"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetVector = void 0;
const express_1 = require("../abstract/express");
const Type_1 = require("../simbolos/Type");
class GetVector extends express_1.Expression {
    constructor(IdName, num, line, column) {
        super(line, column);
        this.IdName = IdName;
        this.num = num;
    }
    execute(env) {
        let exp = this.num.execute(env);
        let result = {
            value: null,
            type: Type_1.Type.error
        };
        if (env.getDimension_variable(this.IdName) == 2) {
            if (exp.type == Type_1.Type.NUMBER && exp.value < env.getDim1_Vector(this.IdName)) {
                if (env.buscar_variable(this.IdName)) {
                    result = {
                        value: env.getValue_Vector(this.IdName, Number(exp.value)),
                        type: env.getTipo_variable(this.IdName)
                    };
                }
                else {
                    console.log("la variable [" + this.IdName + "] no fue encontrada...");
                }
            }
            else {
                console.log("el valor de [" + this.IdName + "] no fue solicitado correctamente...");
            }
        }
        else {
            console.log("la variable [" + this.IdName + "] no tiene una dimension diferente...");
        }
        return result;
    }
}
exports.GetVector = GetVector;
