"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaracion = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
class Declaracion extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, expresion, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.tipo = tipo;
        this.expresion = expresion;
    }
    execute(env) {
        let exp = this.expresion.execute(env);
        for (const id of this.nombre) {
            if (exp.type == this.tipo) {
                const condicion = env.guardar_variable(id, exp.value, this.tipo);
                if (condicion) {
                    console.log("variable [" + id + "] ingresada...");
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
exports.Declaracion = Declaracion;
