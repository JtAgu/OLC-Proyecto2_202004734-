"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclaracionVacio = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class DeclaracionVacio extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.tipo = tipo;
    }
    execute2(env) {
    }
    execute(env, sn) {
        for (const id of this.nombre) {
            if (this.tipo == Type_1.Type.NUMBER) {
                const condicion = env.guardar_variable(id, Number(0), this.tipo);
                if (condicion) {
                    console.log("variable [" + id + "] ingresada por defecto...");
                }
                else {
                    console.log("variable [" + id + "] no ingresada...");
                }
            }
            else if (this.tipo == Type_1.Type.DECIMAL) {
                const condicion = env.guardar_variable(id, Number(0.0), this.tipo);
                if (condicion) {
                    console.log("variable [" + id + "] ingresada por defecto...");
                }
                else {
                    console.log("variable [" + id + "] no ingresada...");
                }
            }
            else if (this.tipo == Type_1.Type.CHAR) {
                const condicion = env.guardar_variable(id, '0', this.tipo);
                if (condicion) {
                    console.log("variable [" + id + "] ingresada por defecto...");
                }
                else {
                    console.log("variable [" + id + "] no ingresada...");
                }
            }
            else if (this.tipo == Type_1.Type.BOOLEAN) {
                const condicion = env.guardar_variable(id, Boolean(true), this.tipo);
                if (condicion) {
                    console.log("variable [" + id + "] ingresada por defecto...");
                }
                else {
                    console.log("variable [" + id + "] no ingresada...");
                }
            }
            else if (this.tipo == Type_1.Type.STRING) {
                const condicion = env.guardar_variable(id, '', this.tipo);
                if (condicion) {
                    console.log("variable [" + id + "] ingresada por defecto...");
                }
                else {
                    console.log("variable [" + id + "] no ingresada...");
                }
            }
            else {
                sn.addError(new Error_1.Error("Declaracion de [" + id + "] incorrecta", "SEMANTICO", this.line, this.column));
            }
        }
    }
}
exports.DeclaracionVacio = DeclaracionVacio;
