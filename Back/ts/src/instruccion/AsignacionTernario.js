"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignacionTernario = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
class AsignacionTernario extends Instruccion_1.Instruccion {
    constructor(nombre, expresion, expresionV, expresionF, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.expresion = expresion;
        this.expresionV = expresionV;
        this.expresionF = expresionF;
    }
    execute(env) {
        let exp = this.expresion.execute(env);
        let expV = this.expresionV.execute(env);
        let expF = this.expresionF.execute(env);
        if (env.getDimension_variable(this.nombre) == 1) {
            if (env.buscar_variable(this.nombre)) {
                //ahora toca ver que sean del mismo tipo
                if (expV.type == env.getTipo_variable(this.nombre) && expF.type == env.getTipo_variable(this.nombre)) {
                    if (exp.type == Type_1.Type.BOOLEAN) {
                        if (Boolean(exp.value)) {
                            env.actualizar_variable(this.nombre, expV.value);
                            console.log("variable [" + this.nombre + "] actualizada con exito...");
                        }
                        else {
                            env.actualizar_variable(this.nombre, expF.value);
                            console.log("variable [" + this.nombre + "] actualizada con exito...");
                        }
                    }
                }
                else {
                    console.log("error semantico, no se puede asignar un valor de otro tipo a la variable [" + this.nombre + "]");
                }
            }
            else {
                console.log("la variable [" + this.nombre + "] no fue encontrada...");
            }
        }
        else {
            console.log("la variable [" + this.nombre + "] tiene una dimension diferente...");
        }
    }
}
exports.AsignacionTernario = AsignacionTernario;
