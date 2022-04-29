"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Literal = void 0;
const express_1 = require("../abstract/express");
const Type_1 = require("../simbolos/Type");
class Literal extends express_1.Expression {
    constructor(value, type, line, column) {
        super(line, column);
        this.value = value;
        this.type = type;
    }
    execute() {
        if (this.type == Type_1.Type.NUMBER)
            return { value: Number(this.value), type: Type_1.Type.NUMBER
            };
        else if (this.type == Type_1.Type.STRING) {
            this.value = (this.value).replaceAll("\"", "");
            return { value: this.value, type: Type_1.Type.STRING };
        }
        else if (this.type == Type_1.Type.BOOLEAN) {
            if (this.value == "true")
                return { value: Boolean(true), type: Type_1.Type.BOOLEAN };
            else
                return { value: Boolean(false), type: Type_1.Type.BOOLEAN };
        }
        else if (this.type == Type_1.Type.DECIMAL) {
            return { value: Number(this.value), type: Type_1.Type.DECIMAL };
        }
        else if (this.type == Type_1.Type.CHAR) {
            this.value = (this.value).replaceAll("\'", "");
            return { value: this.value, type: Type_1.Type.CHAR };
        }
        else
            return { value: this.value, type: Type_1.Type.error };
    }
    ast(salida) {
        const nombre = `node_${this.line}_${this.column}_`;
        if (this.type == Type_1.Type.STRING)
            return `
        ${nombre};
        ${nombre}[label="${this.value.toString().replaceAll("\"", "")}"];`;
        else
            return `
        ${nombre};
        ${nombre}[label="${this.value.toString().replaceAll("\'", "")}"];`;
    }
}
exports.Literal = Literal;
