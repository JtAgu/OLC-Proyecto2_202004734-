"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relacional = void 0;
const express_1 = require("../abstract/express");
const Error_1 = require("../instruccion/Error");
const Type_1 = require("../simbolos/Type");
const relacionalOption_1 = require("./relacionalOption");
class relacional extends express_1.Expression {
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
        //const val:number= nodoIzq.value? 1:0
        if (this.type == relacionalOption_1.RelacionalOption.IGUAL) {
            if (nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.NUMBER
                || nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.DECIMAL
                || nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.CHAR
                || nodoIzq.type == Type_1.Type.DECIMAL && nodoDer.type == Type_1.Type.NUMBER
                || nodoIzq.type == Type_1.Type.DECIMAL && nodoDer.type == Type_1.Type.CHAR
                || nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.NUMBER
                || nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.DECIMAL
                || nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.CHAR
                || nodoIzq.type == Type_1.Type.BOOLEAN && nodoDer.type == Type_1.Type.BOOLEAN
                || nodoIzq.type == Type_1.Type.STRING && nodoDer.type == Type_1.Type.STRING) {
                if (nodoIzq.value == nodoDer.value) {
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
                    sn.addError(new Error_1.Error("Valores incorrectos para 'igual relacional'", "SEMANTICO", this.line, this.column));
                }
            }
        }
        else if (this.type == relacionalOption_1.RelacionalOption.MENOR) {
            if (nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.NUMBER
                || nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.DECIMAL
                || nodoIzq.type == Type_1.Type.DECIMAL && nodoDer.type == Type_1.Type.NUMBER) {
                if (nodoIzq.value < nodoDer.value) {
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
            else if (nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.NUMBER
                || nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.DECIMAL) {
                const val = nodoIzq.value.charCodeAt(0);
                if (val < nodoDer.value) {
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
            else if (nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.CHAR
                || nodoIzq.type == Type_1.Type.DECIMAL && nodoDer.type == Type_1.Type.CHAR) {
                const val = nodoDer.value.charCodeAt(0);
                if (nodoIzq.value < val) {
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
            else if (nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.CHAR) {
                const val = nodoIzq.value.charCodeAt(0);
                const val2 = nodoDer.value.charCodeAt(0);
                if (val < val2) {
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
            else if (nodoIzq.type == Type_1.Type.BOOLEAN && nodoDer.type == Type_1.Type.BOOLEAN) {
                const val = nodoIzq.value ? 1 : 0;
                const val2 = nodoDer.value ? 1 : 0;
                if (val < val2) {
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
                sn.addError(new Error_1.Error("Valores incorrectos para 'menor relacional'", "SEMANTICO", this.line, this.column));
            }
        }
        else if (this.type == relacionalOption_1.RelacionalOption.MAYOR) {
            if (nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.NUMBER
                || nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.DECIMAL
                || nodoIzq.type == Type_1.Type.DECIMAL && nodoDer.type == Type_1.Type.NUMBER) {
                if (nodoIzq.value > nodoDer.value) {
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
            else if (nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.NUMBER
                || nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.DECIMAL) {
                const val = nodoIzq.value.charCodeAt(0);
                if (val > nodoDer.value) {
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
            else if (nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.CHAR
                || nodoIzq.type == Type_1.Type.DECIMAL && nodoDer.type == Type_1.Type.CHAR) {
                const val = nodoDer.value.charCodeAt(0);
                if (nodoIzq.value > val) {
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
            else if (nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.CHAR) {
                const val = nodoIzq.value.charCodeAt(0);
                const val2 = nodoDer.value.charCodeAt(0);
                if (val > val2) {
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
            else if (nodoIzq.type == Type_1.Type.BOOLEAN && nodoDer.type == Type_1.Type.BOOLEAN) {
                const val = nodoIzq.value ? 1 : 0;
                const val2 = nodoDer.value ? 1 : 0;
                if (val > val2) {
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
                sn.addError(new Error_1.Error("Valores incorrectos para 'mayor relacional'", "SEMANTICO", this.line, this.column));
            }
        }
        else if (this.type == relacionalOption_1.RelacionalOption.MENORIGUAL) {
            if (nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.NUMBER
                || nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.DECIMAL
                || nodoIzq.type == Type_1.Type.DECIMAL && nodoDer.type == Type_1.Type.NUMBER) {
                if (nodoIzq.value <= nodoDer.value) {
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
            else if (nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.NUMBER
                || nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.DECIMAL) {
                const val = nodoIzq.value.charCodeAt(0);
                if (val <= nodoDer.value) {
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
            else if (nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.CHAR
                || nodoIzq.type == Type_1.Type.DECIMAL && nodoDer.type == Type_1.Type.CHAR) {
                const val = nodoDer.value.charCodeAt(0);
                if (nodoIzq.value <= val) {
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
            else if (nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.CHAR) {
                const val = nodoIzq.value.charCodeAt(0);
                const val2 = nodoDer.value.charCodeAt(0);
                if (val <= val2) {
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
            else if (nodoIzq.type == Type_1.Type.BOOLEAN && nodoDer.type == Type_1.Type.BOOLEAN) {
                const val = nodoIzq.value ? 1 : 0;
                const val2 = nodoDer.value ? 1 : 0;
                if (val <= val2) {
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
                sn.addError(new Error_1.Error("Valores incorrectos para 'menor igual relacional'", "SEMANTICO", this.line, this.column));
            }
        }
        else if (this.type == relacionalOption_1.RelacionalOption.MAYORIGUAL) {
            if (nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.NUMBER
                || nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.DECIMAL
                || nodoIzq.type == Type_1.Type.DECIMAL && nodoDer.type == Type_1.Type.NUMBER) {
                if (nodoIzq.value >= nodoDer.value) {
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
            else if (nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.NUMBER
                || nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.DECIMAL) {
                const val = nodoIzq.value.charCodeAt(0);
                if (val >= nodoDer.value) {
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
            else if (nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.CHAR
                || nodoIzq.type == Type_1.Type.DECIMAL && nodoDer.type == Type_1.Type.CHAR) {
                const val = nodoDer.value.charCodeAt(0);
                if (nodoIzq.value >= val) {
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
            else if (nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.CHAR) {
                const val = nodoIzq.value.charCodeAt(0);
                const val2 = nodoDer.value.charCodeAt(0);
                if (val >= val2) {
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
            else if (nodoIzq.type == Type_1.Type.BOOLEAN && nodoDer.type == Type_1.Type.BOOLEAN) {
                const val = nodoIzq.value ? 1 : 0;
                const val2 = nodoDer.value ? 1 : 0;
                if (val >= val2) {
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
                sn.addError(new Error_1.Error("Valores incorrectos para 'mayor igual relacional'", "SEMANTICO", this.line, this.column));
            }
        }
        else if (this.type == relacionalOption_1.RelacionalOption.DIFERENTE) {
            if (nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.NUMBER
                || nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.DECIMAL
                || nodoIzq.type == Type_1.Type.NUMBER && nodoDer.type == Type_1.Type.CHAR
                || nodoIzq.type == Type_1.Type.DECIMAL && nodoDer.type == Type_1.Type.NUMBER
                || nodoIzq.type == Type_1.Type.DECIMAL && nodoDer.type == Type_1.Type.CHAR
                || nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.NUMBER
                || nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.DECIMAL
                || nodoIzq.type == Type_1.Type.CHAR && nodoDer.type == Type_1.Type.CHAR
                || nodoIzq.type == Type_1.Type.BOOLEAN && nodoDer.type == Type_1.Type.BOOLEAN
                || nodoIzq.type == Type_1.Type.STRING && nodoDer.type == Type_1.Type.STRING) {
                if (nodoIzq.value != nodoDer.value) {
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
                sn.addError(new Error_1.Error("Valores incorrectos para 'diferente relacional'", "SEMANTICO", this.line, this.column));
            }
        }
        else {
            console.error('error');
        }
        return result;
    }
}
exports.relacional = relacional;
