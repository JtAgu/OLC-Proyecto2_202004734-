"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignacionVector = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
class AsignacionVector extends Instruccion_1.Instruccion {
    constructor(nombre, expresionN, expresion, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.expresionN = expresionN;
        this.expresion = expresion;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let exp = this.expresion.execute(env, sn);
        let n = this.expresionN.execute(env, sn);
        if (env.buscar_variable(this.nombre)) {
            if (env.getDimension_variable(this.nombre) == 2) {
                //ahora toca ver que sean del mismo tipo
                if (exp.type == env.getTipo_variable(this.nombre) && n.type == Type_1.Type.NUMBER && n.value < env.getDim1_Vector(this.nombre)) {
                    env.actualizar_Vector(this.nombre, exp.value, n.value);
                    console.log("variable [" + this.nombre + "] actualizada con exito...");
                }
                else {
                    console.log("error semantico, no se puede asignar un valor de otro tipo a la variable [" + this.nombre + "]");
                }
            }
            else {
                console.log("la variable [" + this.nombre + "] tiene una dimension diferente...");
            }
        }
        else {
            console.log("la variable [" + this.nombre + "] no fue encontrada...");
        }
    }
}
exports.AsignacionVector = AsignacionVector;
