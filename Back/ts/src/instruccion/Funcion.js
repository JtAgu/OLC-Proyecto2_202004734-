"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcion = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
class Funcion extends Instruccion_1.Instruccion {
    constructor(Nombre, Parametros, Intrucciones, Typo, line, column) {
        super(line, column);
        this.Nombre = Nombre;
        this.Parametros = Parametros;
        this.Intrucciones = Intrucciones;
        this.Typo = Typo;
    }
    execute2(env) {
    }
    execute(env, sn) {
        if (this.Parametros != null) {
            const condicion = env.guardar_Funcion(this.Nombre, this.Typo, this.Intrucciones, this.Parametros);
            if (condicion) {
                console.log("variable [" + this.Nombre + "] ingresada...");
            }
            else {
                console.log("variable [" + this.Nombre + "] no ingresada...");
            }
        }
        else {
            const condicion = env.guardar_Funcion(this.Nombre, this.Typo, this.Intrucciones, null);
            if (condicion) {
                console.log("variable [" + this.Nombre + "] ingresada...");
            }
            else {
                console.log("variable [" + this.Nombre + "] no ingresada...");
            }
        }
    }
}
exports.Funcion = Funcion;
