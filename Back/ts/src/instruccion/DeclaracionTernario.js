"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclaracionTernario = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
class DeclaracionTernario extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, expresion, expresionV, expresionF, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.tipo = tipo;
        this.expresion = expresion;
        this.expresionV = expresionV;
        this.expresionF = expresionF;
    }
    execute(env) {
        let exp = this.expresion.execute(env);
        let expV = this.expresionV.execute(env);
        let expF = this.expresionF.execute(env);
        if (expV.type == this.tipo && expF.type == this.tipo) {
            if (exp.type == Type_1.Type.BOOLEAN) {
                if (Boolean(exp.value)) {
                    const condicion = env.guardar_variable(this.nombre, expV, this.tipo);
                    if (condicion) {
                        console.log("variable [" + this.nombre + "] ingresada...");
                    }
                    else {
                        console.log("variable [" + this.nombre + "] no ingresada...");
                    }
                }
                else {
                    const condicion = env.guardar_variable(this.nombre, expF, this.tipo);
                    if (condicion) {
                        console.log("variable [" + this.nombre + "] ingresada...");
                    }
                    else {
                        console.log("variable [" + this.nombre + "] no ingresada...");
                    }
                }
            }
        }
        else {
            console.log("error semantico, declaracion de variable [" + this.nombre + "] no correcta");
        }
    }
}
exports.DeclaracionTernario = DeclaracionTernario;
