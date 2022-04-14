"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asignacion = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
class Asignacion extends Instruccion_1.Instruccion {
    constructor(nombre, expresion, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.expresion = expresion;
    }
    execute(env) {
        let exp = this.expresion.execute(env);
        if (env.buscar_variable(this.nombre)) {
            //ahora toca ver que sean del mismo tipo
            if (exp.type == env.getTipo_variable(this.nombre)) {
                env.actualizar_variable(this.nombre, exp.value);
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
exports.Asignacion = Asignacion;
