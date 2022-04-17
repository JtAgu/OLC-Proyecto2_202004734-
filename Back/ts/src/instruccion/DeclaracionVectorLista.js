"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclaracionVectorLista = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
class DeclaracionVectorLista extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, valores, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.tipo = tipo;
        this.valores = valores;
    }
    execute(env) {
        let Concordancia = true;
        let val = [];
        for (const x of this.valores) {
            let exp = x.execute(env);
            if (exp.type == this.tipo) {
                val.push(exp.value);
            }
            else {
                console.log("error semantico, declaracion de variable [" + this.nombre + "] no correcta");
                Concordancia = false;
                break;
            }
        }
        if (Concordancia) {
            const condicion = env.guardar_Vector(this.nombre, val, this.tipo, val.length);
            if (condicion) {
                console.log("variable [" + this.nombre + "] ingresada...");
            }
            else {
                console.log("variable [" + this.nombre + "] no ingresada...");
            }
        }
    }
}
exports.DeclaracionVectorLista = DeclaracionVectorLista;
