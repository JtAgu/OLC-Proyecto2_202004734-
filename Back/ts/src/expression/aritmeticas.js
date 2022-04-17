"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arithmetic = void 0;
const express_1 = require("../abstract/express");
const Type_1 = require("../simbolos/Type");
const aritmeticOption_1 = require("./aritmeticOption");
class Arithmetic extends express_1.Expression {
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
        if (this.type == aritmeticOption_1.ArithmeticOption.MAS) {
            if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.NUMBER) {
                result = {
                    value: (Number(nodoIzq.value) + Number(nodoDer.value)),
                    type: Type_1.Type.NUMBER
                };
            }
            else if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.DECIMAL
                || nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.NUMBER) {
                result = {
                    value: (Number(nodoIzq.value) + Number(nodoDer.value)),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.CHAR) {
                const val = nodoIzq.value.charCodeAt(0);
                result = {
                    value: (Number(val) + Number(nodoDer.value)),
                    type: Type_1.Type.NUMBER
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else if (nodoDer.type == Type_1.Type.CHAR && nodoIzq.type == Type_1.Type.NUMBER) {
                const val = nodoDer.value.charCodeAt(0);
                result = {
                    value: (Number(nodoIzq.value) + Number(val)),
                    type: Type_1.Type.NUMBER
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.BOOLEAN) {
                const val = nodoIzq.value ? 1 : 0;
                result = {
                    value: (val + Number(nodoDer.value)),
                    type: Type_1.Type.NUMBER
                };
            }
            else if (nodoDer.type == Type_1.Type.BOOLEAN && nodoIzq.type == Type_1.Type.NUMBER) {
                const val = nodoDer.value ? 1 : 0;
                result = {
                    value: (Number(nodoIzq.value) + val),
                    type: Type_1.Type.NUMBER
                };
            }
            else if (nodoIzq.type == Type_1.Type.STRING || nodoDer.type == Type_1.Type.STRING) {
                result = {
                    value: (String(nodoIzq.value) + String(nodoDer.value)),
                    type: Type_1.Type.STRING
                };
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.DECIMAL) {
                result = {
                    value: ((nodoIzq.value) + (nodoDer.value)),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.BOOLEAN) {
                const val = nodoIzq.value ? 1 : 0;
                result = {
                    value: (val + (nodoDer.value)),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.BOOLEAN && nodoIzq.type == Type_1.Type.DECIMAL) {
                const val = nodoDer.value ? 1 : 0;
                result = {
                    value: ((nodoIzq.value) + val),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.CHAR) {
                const val = nodoIzq.value.charCodeAt(0);
                result = {
                    value: (Number(val) + Number(nodoDer.value)),
                    type: Type_1.Type.NUMBER
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else if (nodoDer.type == Type_1.Type.CHAR && nodoIzq.type == Type_1.Type.DECIMAL) {
                const val = nodoDer.value.charCodeAt(0);
                result = {
                    value: (Number(nodoIzq.value) + Number(val)),
                    type: Type_1.Type.NUMBER
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else if (nodoDer.type == Type_1.Type.CHAR && nodoIzq.type == Type_1.Type.CHAR) {
                result = {
                    value: (String(nodoIzq.value) + String(nodoIzq.value)),
                    type: Type_1.Type.STRING
                };
            }
            else {
                console.log("error semantico, valores incorrectos para [" + this.type + "]");
            }
            //demas validadionces para la operaciones aritmeticas
        }
        else if (this.type == aritmeticOption_1.ArithmeticOption.MENOS) {
            if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.NUMBER) {
                result = {
                    value: (nodoIzq.value - nodoDer.value),
                    type: Type_1.Type.NUMBER
                };
            }
            else if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.DECIMAL
                || nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.NUMBER) {
                result = {
                    value: (nodoIzq.value - nodoDer.value),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.BOOLEAN) {
                const val = nodoIzq.value ? 1 : 0;
                result = {
                    value: (val - (nodoDer.value)),
                    type: Type_1.Type.NUMBER
                };
            }
            else if (nodoDer.type == Type_1.Type.BOOLEAN && nodoIzq.type == Type_1.Type.NUMBER) {
                const val = nodoDer.value ? 1 : 0;
                result = {
                    value: ((nodoIzq.value) - val),
                    type: Type_1.Type.NUMBER
                };
            }
            else if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.CHAR) {
                const val = nodoIzq.value.charCodeAt(0);
                result = {
                    value: (Number(val) - Number(nodoDer.value)),
                    type: Type_1.Type.NUMBER
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else if (nodoDer.type == Type_1.Type.CHAR && nodoIzq.type == Type_1.Type.NUMBER) {
                const val = nodoDer.value.charCodeAt(0);
                result = {
                    value: (Number(nodoIzq.value) - Number(val)),
                    type: Type_1.Type.NUMBER
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.DECIMAL) {
                result = {
                    value: (nodoIzq.value - nodoDer.value),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.BOOLEAN) {
                const val = nodoIzq.value ? 1 : 0;
                result = {
                    value: (val - nodoDer.value),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.BOOLEAN && nodoIzq.type == Type_1.Type.DECIMAL) {
                const val = nodoDer.value ? 1 : 0;
                result = {
                    value: (nodoIzq.value - val),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.CHAR) {
                const val = nodoIzq.value.charCodeAt(0);
                result = {
                    value: (Number(val) - Number(nodoDer.value)),
                    type: Type_1.Type.DECIMAL
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else if (nodoDer.type == Type_1.Type.CHAR && nodoIzq.type == Type_1.Type.DECIMAL) {
                const val = nodoDer.value.charCodeAt(0);
                result = {
                    value: (Number(nodoIzq.value) - Number(val)),
                    type: Type_1.Type.DECIMAL
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else {
                console.log("error semantico, valores incorrectos para [" + this.type + "]");
            }
            //en la resta unicamente quiero con numeros
        }
        else if (this.type == aritmeticOption_1.ArithmeticOption.MULTIPLICACION) {
            if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.NUMBER) {
                result = {
                    value: (nodoIzq.value * nodoDer.value),
                    type: Type_1.Type.NUMBER
                };
            }
            else if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.DECIMAL
                || nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.NUMBER) {
                result = {
                    value: (nodoIzq.value * nodoDer.value),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.CHAR) {
                const val = nodoIzq.value.charCodeAt(0);
                result = {
                    value: (Number(val) * Number(nodoDer.value)),
                    type: Type_1.Type.NUMBER
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else if (nodoDer.type == Type_1.Type.CHAR && nodoIzq.type == Type_1.Type.NUMBER) {
                const val = nodoDer.value.charCodeAt(0);
                result = {
                    value: (Number(nodoIzq.value) * Number(val)),
                    type: Type_1.Type.NUMBER
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.DECIMAL) {
                result = {
                    value: (nodoIzq.value * nodoDer.value),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.CHAR) {
                const val = nodoIzq.value.charCodeAt(0);
                result = {
                    value: (Number(val) * Number(nodoDer.value)),
                    type: Type_1.Type.DECIMAL
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else if (nodoDer.type == Type_1.Type.CHAR && nodoIzq.type == Type_1.Type.DECIMAL) {
                const val = nodoDer.value.charCodeAt(0);
                result = {
                    value: (Number(nodoIzq.value) * Number(val)),
                    type: Type_1.Type.DECIMAL
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else {
                console.log("error semantico, valores incorrectos para [" + this.type + "]");
            }
            //en la resta unicamente quiero con numeros
        }
        else if (this.type == aritmeticOption_1.ArithmeticOption.DIV) {
            if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.NUMBER) {
                result = {
                    value: (nodoIzq.value / nodoDer.value),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.DECIMAL
                || nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.NUMBER) {
                result = {
                    value: (nodoIzq.value / nodoDer.value),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.CHAR) {
                const val = nodoIzq.value.charCodeAt(0);
                result = {
                    value: (Number(val) / Number(nodoDer.value)),
                    type: Type_1.Type.DECIMAL
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else if (nodoDer.type == Type_1.Type.CHAR && nodoIzq.type == Type_1.Type.NUMBER) {
                const val = nodoDer.value.charCodeAt(0);
                result = {
                    value: (Number(nodoIzq.value) / Number(val)),
                    type: Type_1.Type.DECIMAL
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else if (nodoDer.type == Type_1.Type.CHAR && nodoIzq.type == Type_1.Type.NUMBER) {
                result = {
                    value: (nodoIzq.value / nodoDer.value),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.DECIMAL) {
                result = {
                    value: (nodoIzq.value / nodoDer.value),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.CHAR) {
                const val = nodoIzq.value.charCodeAt(0);
                result = {
                    value: (Number(val) + Number(nodoDer.value)),
                    type: Type_1.Type.DECIMAL
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else if (nodoDer.type == Type_1.Type.CHAR && nodoIzq.type == Type_1.Type.DECIMAL) {
                const val = nodoDer.value.charCodeAt(0);
                result = {
                    value: (Number(nodoIzq.value) + Number(val)),
                    type: Type_1.Type.DECIMAL
                };
                //nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER
            }
            else {
                console.log("error semantico, valores incorrectos para [" + this.type + "]");
            }
            //en la resta unicamente quiero con numeros
        }
        else if (this.type == aritmeticOption_1.ArithmeticOption.POT) {
            if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.NUMBER) {
                result = {
                    value: Math.pow(nodoIzq.value, nodoDer.value),
                    type: Type_1.Type.NUMBER
                };
            }
            else if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.DECIMAL
                || nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.NUMBER) {
                result = {
                    value: Math.pow(nodoIzq.value, nodoDer.value),
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.DECIMAL) {
                result = {
                    value: Math.pow(nodoIzq.value, nodoDer.value),
                    type: Type_1.Type.DECIMAL
                };
            }
            else {
                console.log("error semantico, valores incorrectos para [" + this.type + "]");
            }
            //en la resta unicamente quiero con numeros
        }
        else if (this.type == aritmeticOption_1.ArithmeticOption.MODULO) {
            if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.NUMBER) {
                result = {
                    value: nodoIzq.value % nodoDer.value,
                    type: Type_1.Type.NUMBER
                };
            }
            else if (nodoDer.type == Type_1.Type.NUMBER && nodoIzq.type == Type_1.Type.DECIMAL
                || nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.NUMBER) {
                result = {
                    value: nodoIzq.value % nodoDer.value,
                    type: Type_1.Type.DECIMAL
                };
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL && nodoIzq.type == Type_1.Type.DECIMAL) {
                result = {
                    value: nodoIzq.value % nodoDer.value,
                    type: Type_1.Type.DECIMAL
                };
            }
            else {
                console.log("error semantico, valores incorrectos para [" + this.type + "]");
            }
            //en la resta unicamente quiero con numeros
        }
        else if (this.type == aritmeticOption_1.ArithmeticOption.NEGACION) {
            if (nodoDer.type == Type_1.Type.NUMBER) {
                result = {
                    value: nodoIzq.value * -1,
                    type: Type_1.Type.NUMBER
                };
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL) {
                result = {
                    value: nodoIzq.value * -1,
                    type: Type_1.Type.DECIMAL
                };
            }
            else {
                console.log("error semantico, valores incorrectos para [" + this.type + "]");
            }
            //en la resta unicamente quiero con numeros
        }
        else if (this.type == aritmeticOption_1.ArithmeticOption.INCR) {
            if (nodoDer.type == Type_1.Type.NUMBER) {
                result = {
                    value: Number(nodoIzq.value) + 1,
                    type: Type_1.Type.NUMBER
                };
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL) {
                result = {
                    value: Number(nodoIzq.value) + 1,
                    type: Type_1.Type.DECIMAL
                };
            }
            else {
                console.log("error semantico, valores incorrectos para [" + this.type + "]");
            }
            //en la resta unicamente quiero con numeros
        }
        else if (this.type == aritmeticOption_1.ArithmeticOption.DECR) {
            if (nodoDer.type == Type_1.Type.NUMBER) {
                result = {
                    value: Number(nodoIzq.value) - 1,
                    type: Type_1.Type.NUMBER
                };
            }
            else if (nodoDer.type == Type_1.Type.DECIMAL) {
                result = {
                    value: nodoIzq.value - 1,
                    type: Type_1.Type.DECIMAL
                };
            }
            else {
                console.log("error semantico, valores incorrectos para [" + this.type + "]");
            }
            //en la resta unicamente quiero con numeros
        }
        else {
        }
        return result;
    }
}
exports.Arithmetic = Arithmetic;
