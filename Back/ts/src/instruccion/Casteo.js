"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casteo = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class Casteo extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, expresion, TipoCambio, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.tipo = tipo;
        this.expresion = expresion;
        this.TipoCambio = TipoCambio;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let Aceptado = false;
        let exp = this.expresion.execute(env, sn);
        if (exp.type == Type_1.Type.NUMBER && this.TipoCambio == Type_1.Type.DECIMAL) {
            exp.type = this.TipoCambio;
            Aceptado = true;
        }
        else if (exp.type == Type_1.Type.DECIMAL && this.TipoCambio == Type_1.Type.NUMBER) {
            exp.type = this.TipoCambio;
            exp.value = exp.value.toFixed(0);
            Aceptado = true;
        }
        else if (exp.type == Type_1.Type.NUMBER && this.TipoCambio == Type_1.Type.STRING) {
            exp.type = this.TipoCambio;
            Aceptado = true;
        }
        else if (exp.type == Type_1.Type.NUMBER && this.TipoCambio == Type_1.Type.CHAR) {
            exp.type = this.TipoCambio;
            exp.value = String.fromCharCode(Number(exp.value));
            Aceptado = true;
        }
        else if (exp.type == Type_1.Type.DECIMAL && this.TipoCambio == Type_1.Type.STRING) {
            exp.type = this.TipoCambio;
            Aceptado = true;
        }
        else if (exp.type == Type_1.Type.CHAR && this.TipoCambio == Type_1.Type.NUMBER) {
            exp.type = this.TipoCambio;
            exp.value = exp.value.charCodeAt(0);
            Aceptado = true;
        }
        else if (exp.type == Type_1.Type.CHAR && this.TipoCambio == Type_1.Type.DECIMAL) {
            exp.type = this.TipoCambio;
            exp.value = exp.value.charCodeAt(0);
            Aceptado = true;
        }
        if (Aceptado) {
            if (exp.type == this.tipo) {
                console.log(exp.type);
                const condicion = env.guardar_variable(this.nombre, exp.value, this.tipo);
                if (condicion) {
                    console.log("variable [" + this.nombre + "] ingresada...");
                }
                else {
                    console.log("variable [" + this.nombre + "] no ingresada...");
                }
            }
            else {
                sn.addError(new Error_1.Error(" Expresion con tipo diferente a [" + this.nombre + "]", "SEMANTICO", this.line, this.column));
            }
        }
        else {
            sn.addError(new Error_1.Error("casteo no permitido", "SEMANTICO", this.line, this.column));
        }
    }
}
exports.Casteo = Casteo;
