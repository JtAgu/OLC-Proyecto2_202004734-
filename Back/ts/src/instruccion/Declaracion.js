"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaracion = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Error_1 = require("./Error");
class Declaracion extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, expresion, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.tipo = tipo;
        this.expresion = expresion;
    }
    execute2(env) {
    }
    execute(env, sn) {
        if (this.expresion != null) {
            let exp = this.expresion.execute(env, sn);
            for (const id of this.nombre) {
                if (exp.type == this.tipo) {
                    //console.log(exp);
                    const condicion = env.guardar_variable(id, exp.value, this.tipo);
                    if (condicion) {
                        console.log("variable [" + id + "] ingresada...");
                    }
                    else {
                        console.log("variable [" + id + "] no ingresada...");
                    }
                }
                else {
                    sn.addError(new Error_1.Error(" Expresion con tipo diferente a [" + id + "]", "SEMANTICO", this.line, this.column));
                }
            }
        }
    }
}
exports.Declaracion = Declaracion;
