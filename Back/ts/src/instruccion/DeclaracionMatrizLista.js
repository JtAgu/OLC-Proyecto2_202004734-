"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclaracionMatrizLista = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
class DeclaracionMatrizLista extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, valores, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.tipo = tipo;
        this.valores = valores;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let Concordancia = true;
        let val = [];
        var i = 0;
        var j = 0;
        for (const x of this.valores) {
            let val2 = [];
            j = 0;
            i++;
            for (const y of x) {
                j++;
                let exp = y.execute(env, sn);
                if (exp.type == this.tipo) {
                    val2.push(exp.value);
                }
                else {
                    console.log("error semantico, declaracion de variable [" + this.nombre + "] no correcta");
                    Concordancia = false;
                    break;
                }
            }
            if (!Concordancia) {
                break;
            }
            val.push(val2);
        }
        if (Concordancia) {
            const condicion = env.guardar_Matriz(this.nombre, val, this.tipo, i, j);
            if (condicion) {
                console.log("variable [" + this.nombre + "] ingresada...");
            }
            else {
                console.log("variable [" + this.nombre + "] no ingresada...");
            }
        }
    }
}
exports.DeclaracionMatrizLista = DeclaracionMatrizLista;
