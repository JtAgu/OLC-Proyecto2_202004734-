"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignacionMatriz = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
class AsignacionMatriz extends Instruccion_1.Instruccion {
    constructor(nombre, expresionN, expresionN2, expresion, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.expresionN = expresionN;
        this.expresionN2 = expresionN2;
        this.expresion = expresion;
    }
    execute(env) {
        let exp = this.expresion.execute(env);
        let n = this.expresionN.execute(env);
        let n2 = this.expresionN2.execute(env);
        if (env.buscar_variable(this.nombre)) {
            if (env.getDimension_variable(this.nombre) == 3) {
                //ahora toca ver que sean del mismo tipo
                if (exp.type == env.getTipo_variable(this.nombre) && n.type == Type_1.Type.NUMBER && n.value < env.getDim1_Vector(this.nombre) && n2.type == Type_1.Type.NUMBER && n2.value < env.getDim1_Vector(this.nombre)) {
                    env.actualizar_Matriz(this.nombre, exp.value, n.value, n2.value);
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
exports.AsignacionMatriz = AsignacionMatriz;
