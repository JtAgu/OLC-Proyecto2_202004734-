"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetId = void 0;
const express_1 = require("../abstract/express");
const Type_1 = require("../simbolos/Type");
class GetId extends express_1.Expression {
    constructor(IdName, line, column) {
        super(line, column);
        this.IdName = IdName;
    }
    execute(env) {
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
            else {
                console.log("la variable [" + this.IdName + "] tiene una dimension diferente...");
            }
        }
        else {
            console.log("la variable [" + this.IdName + "] no fue encontrada...");
        }
        return result;
    }
}
exports.GetId = GetId;
