"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasteoAsig = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class CasteoAsig extends Instruccion_1.Instruccion {
    constructor(nombre, expresion, TipoCambio, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.expresion = expresion;
        this.TipoCambio = TipoCambio;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let Aceptado = false;
        let exp = this.expresion.execute(env, sn);
        if (env.buscar_variable(this.nombre)) {
            //ahora toca ver que sean del mismo tipo
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
                if (exp.type == env.getTipo_variable(this.nombre)) {
                    env.actualizar_variable(this.nombre, exp.value);
                    console.log("variable [" + this.nombre + "] actualizada con exito...");
                }
                else {
                    sn.addError(new Error_1.Error(" Expresion con tipo diferente a [" + this.nombre + "]", "SEMANTICO", this.line, this.column));
                }
            }
        }
        else {
            sn.addError(new Error_1.Error("variable [" + this.nombre + "] no fue encontrada", "SEMANTICO", this.line, this.column));
        }
    }
    ast(s) {
        const nombre_nodo = `node_${this.line}_${this.column}_`;
        s.add_ast(`
    ${nombre_nodo}[label="\\<Instruccion\\>\\Asignacion_Casteo"];
    ${nombre_nodo}2[label="\\<ID\\>\\n${this.nombre}"];
    ${nombre_nodo}3[label="\\<Cambio\\>\\n${this.TipoCambio}"];
    ${nombre_nodo}->${nombre_nodo}2;
    ${nombre_nodo}->${nombre_nodo}3;
    ${nombre_nodo}->${this.expresion.ast(s)}
    `);
    }
}
exports.CasteoAsig = CasteoAsig;
