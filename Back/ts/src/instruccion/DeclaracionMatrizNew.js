"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclaracionMatrizNew = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
class DeclaracionMatrizNew extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, Dim1, Dim2, tipo2, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.tipo = tipo;
        this.Dim1 = Dim1;
        this.Dim2 = Dim2;
        this.tipo2 = tipo2;
    }
    execute(env) {
        let exp = this.Dim1.execute(env);
        let exp2 = this.Dim2.execute(env);
        if (exp.type == Type_1.Type.NUMBER && exp2.type == Type_1.Type.NUMBER && this.tipo == this.tipo2) {
            if (Type_1.Type.NUMBER == this.tipo || Type_1.Type.DECIMAL == this.tipo) {
                let valor = [[], []];
                let n = Number(exp.value);
                let m = Number(exp2.value);
                for (var j = 0; j < m; j++) {
                    for (var i = 0; i < n; i++) {
                        valor[[i][j]] = 0;
                    }
                }
                const condicion = env.guardar_Matriz(this.nombre, valor, this.tipo, exp.value, exp2.value);
                if (condicion) {
                    console.log("variable [" + this.nombre + "] ingresada...");
                }
                else {
                    console.log("variable [" + this.nombre + "] no ingresada...");
                }
            }
            else if (Type_1.Type.CHAR == this.tipo) {
                let valor = [[], []];
                let n = Number(exp.value);
                let m = Number(exp2.value);
                for (var j = 0; j < m; j++) {
                    for (var i = 0; i < n; i++) {
                        valor[[i][j]] = '0';
                    }
                }
                const condicion = env.guardar_Matriz(this.nombre, valor, this.tipo, exp.value, exp2.value);
                if (condicion) {
                    console.log("variable [" + this.nombre + "] ingresada...");
                }
                else {
                    console.log("variable [" + this.nombre + "] no ingresada...");
                }
            }
            else if (Type_1.Type.BOOLEAN == this.tipo) {
                let valor = [[], []];
                let n = Number(exp.value);
                let m = Number(exp2.value);
                for (var j = 0; j < m; j++) {
                    for (var i = 0; i < n; i++) {
                        valor[[i][j]] = Boolean(true);
                    }
                }
                const condicion = env.guardar_Matriz(this.nombre, valor, this.tipo, exp.value, exp2.value);
                if (condicion) {
                    console.log("variable [" + this.nombre + "] ingresada...");
                }
                else {
                    console.log("variable [" + this.nombre + "] no ingresada...");
                }
            }
            else if (Type_1.Type.STRING == this.tipo) {
                let valor = [[], []];
                let n = Number(exp.value);
                let m = Number(exp2.value);
                for (var j = 0; j < m; j++) {
                    for (var i = 0; i < n; i++) {
                        valor[[i][j]] = "";
                    }
                }
                const condicion = env.guardar_Matriz(this.nombre, valor, this.tipo, exp.value, exp2.value);
                if (condicion) {
                    console.log("variable [" + this.nombre + "] ingresada...");
                }
                else {
                    console.log("variable [" + this.nombre + "] no ingresada...");
                }
            }
            else {
                console.log("error semantico, declaracion de variable [" + this.nombre + "] no correcta");
            }
        }
    }
}
exports.DeclaracionMatrizNew = DeclaracionMatrizNew;
