"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logic = void 0;
const express_1 = require("../abstract/express");
const Type_1 = require("../simbolos/Type");
const logicOption_1 = require("./logicOption");
class logic extends express_1.Expression {
    constructor(left, right, type, line, column) {
        super(line, column);
        this.left = left;
        this.right = right;
        this.type = type;
    }
    execute(env) {
        let result = {
            value: null,
            type: Type_1.Type.error
        };
        const nodoIzq = this.left.execute(env);
        const nodoDer = this.right.execute(env);
        if (this.type == logicOption_1.LogicOption.NOT) {
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
        else if (this.type == logicOption_1.LogicOption.AND) {
            if (Boolean(nodoIzq.value) && Boolean(nodoDer.value)) {
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
        else if (this.type == logicOption_1.LogicOption.OR) {
            if (Boolean(nodoIzq.value) || Boolean(nodoDer.value)) {
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
        return result;
    }
}
exports.logic = logic;
