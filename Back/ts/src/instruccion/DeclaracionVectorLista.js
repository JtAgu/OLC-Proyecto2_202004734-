"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclaracionVectorLista = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
class DeclaracionVectorLista extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, valores, valorS, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.tipo = tipo;
        this.valores = valores;
        this.valorS = valorS;
    }
    execute2(env) {
    }
    execute(env, sn) {
        var _a;
        let Concordancia = true;
        if (this.valores != null) {
            let val = [];
            for (const x of this.valores) {
                let exp = x.execute(env, sn);
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
        else {
            let val = [];
            let exp = (_a = this.valorS) === null || _a === void 0 ? void 0 : _a.execute(env, sn);
            if ((exp === null || exp === void 0 ? void 0 : exp.type) == Type_1.Type.STRING) {
                for (const s of exp.value) {
                    val.push(s);
                }
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
}
exports.DeclaracionVectorLista = DeclaracionVectorLista;
