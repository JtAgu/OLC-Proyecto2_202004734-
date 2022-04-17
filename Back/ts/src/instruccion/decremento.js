"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decremento = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
class Decremento extends Instruccion_1.Instruccion {
    constructor(nombre, line, column) {
        super(line, column);
        this.nombre = nombre;
    }
    execute(env) {
        if (env.buscar_variable(this.nombre)) {
            //ahora toca ver que sean del mismo tipo
            if (Type_1.Type.NUMBER == env.getTipo_variable(this.nombre) || Type_1.Type.DECIMAL == env.getTipo_variable(this.nombre)) {
                env.actualizar_variable(this.nombre, Number(env.getValue_variable(this.nombre)) - 1);
                console.log("variable [" + this.nombre + "] actualizada con exito...");
            }
            else {
                console.log("error semantico, no se puede asignar un valor de otro tipo a la variable [" + this.nombre + "]");
            }
        }
        else {
            console.log("la variable [" + this.nombre + "] no fue encontrada...");
        }
    }
}
exports.Decremento = Decremento;
