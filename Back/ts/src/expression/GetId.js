"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetId = void 0;
const express_1 = require("../abstract/express");
const Error_1 = require("../instruccion/Error");
const Type_1 = require("../simbolos/Type");
class GetId extends express_1.Expression {
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
            else {
                sn.addError(new Error_1.Error("la variable [" + this.IdName + "] tiene una dimension diferente...", "SEMANTICO", this.line, this.column));
                //console.log("la variable ["+this.IdName+"] tiene una dimension diferente...");
            }
        }
        else {
            sn.addError(new Error_1.Error("la variable [" + this.IdName + "] no fue encontrada...", "SEMANTICO", this.line, this.column));
        }
        return result;
    }
}
exports.GetId = GetId;
