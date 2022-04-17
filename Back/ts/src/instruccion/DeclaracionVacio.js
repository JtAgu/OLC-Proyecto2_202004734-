"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclaracionVacio = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
class DeclaracionVacio extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.tipo = tipo;
    }
    execute(env) {
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
                console.log("error semantico, declaracion de variable [" + id + "] no correcta");
            }
        }
    }
}
exports.DeclaracionVacio = DeclaracionVacio;
