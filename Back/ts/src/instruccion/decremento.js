"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decremento = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
class Decremento extends Instruccion_1.Instruccion {
    constructor(nombre, dim1, dim2, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.dim1 = dim1;
        this.dim2 = dim2;
    }
    execute2(env) {
    }
    execute(env, sn) {
        if (env.buscar_variable(this.nombre)) {
            if (this.dim2 != null && this.dim1 != null) {
                let exp1 = this.dim1.execute(env, sn);
                let exp2 = this.dim2.execute(env, sn);
                if ((Type_1.Type.NUMBER == env.getTipo_variable(this.nombre) || Type_1.Type.DECIMAL == env.getTipo_variable(this.nombre)) && exp1.type == Type_1.Type.NUMBER && exp2.type == Type_1.Type.NUMBER) {
                    env.actualizar_Matriz(this.nombre, Number(env.getValue_Matriz(this.nombre, exp1.value, exp2.value)) - 1, exp1.value, exp2.value);
                    console.log("variable [" + this.nombre + "] actualizada con exito...");
                }
                else {
                    console.log("error semantico, no se puede asignar un valor de otro tipo a la variable [" + this.nombre + "]");
                }
            }
            else if (this.dim1 != null && this.dim2 == null) {
                let exp1 = this.dim1.execute(env, sn);
                if ((Type_1.Type.NUMBER == env.getTipo_variable(this.nombre) || Type_1.Type.DECIMAL == env.getTipo_variable(this.nombre)) && exp1.type == Type_1.Type.NUMBER) {
                    env.actualizar_Vector(this.nombre, Number(env.getValue_Vector(this.nombre, exp1.value)) - 1, exp1.value);
                    console.log("variable [" + this.nombre + "] actualizada con exito...");
                }
                else {
                    console.log("error semantico, no se puede asignar un valor de otro tipo a la variable [" + this.nombre + "]");
                }
            }
            else {
                if (Type_1.Type.NUMBER == env.getTipo_variable(this.nombre) || Type_1.Type.DECIMAL == env.getTipo_variable(this.nombre)) {
                    env.actualizar_variable(this.nombre, Number(env.getValue_variable(this.nombre)) - 1);
                    console.log("variable [" + this.nombre + "] actualizada con exito...");
                }
                else {
                    console.log("error semantico, no se puede asignar un valor de otro tipo a la variable [" + this.nombre + "]");
                }
            }
        }
        else {
            console.log("la variable [" + this.nombre + "] no fue encontrada...");
        }
    }
}
exports.Decremento = Decremento;
