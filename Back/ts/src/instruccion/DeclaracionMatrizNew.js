"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclaracionMatrizNew = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class DeclaracionMatrizNew extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, Dim1, Dim2, tipo2, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.tipo = tipo;
        this.Dim1 = Dim1;
        this.Dim2 = Dim2;
        this.tipo2 = tipo2;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let exp = this.Dim1.execute(env, sn);
        let exp2 = this.Dim2.execute(env, sn);
        if (exp.type == Type_1.Type.NUMBER && exp2.type == Type_1.Type.NUMBER && this.tipo == this.tipo2) {
            if (Type_1.Type.NUMBER == this.tipo || Type_1.Type.DECIMAL == this.tipo) {
                let n = Number(exp.value);
                let m = Number(exp2.value);
                let valor = [];
                for (var j = 0; j < m; j++) {
                    let val2 = [];
                    for (var i = 0; i < n; i++) {
                        val2.push(0);
                    }
                    valor.push(val2);
                }
                const condicion = env.guardar_Matriz(this.nombre, this.line, this.column, valor, this.tipo, exp.value, exp2.value);
                if (condicion) {
                    console.log("variable [" + this.nombre + "] ingresada...");
                }
                else {
                    console.log("variable [" + this.nombre + "] no ingresada...");
                }
            }
            else if (Type_1.Type.CHAR == this.tipo) {
                let n = Number(exp.value);
                let m = Number(exp2.value);
                let valor = [];
                for (var j = 0; j < m; j++) {
                    let val2 = [];
                    for (var i = 0; i < n; i++) {
                        val2.push('0');
                    }
                    valor.push(val2);
                }
                const condicion = env.guardar_Matriz(this.nombre, this.line, this.column, valor, this.tipo, exp.value, exp2.value);
                if (condicion) {
                    console.log("variable [" + this.nombre + "] ingresada...");
                }
                else {
                    console.log("variable [" + this.nombre + "] no ingresada...");
                }
            }
            else if (Type_1.Type.BOOLEAN == this.tipo) {
                let n = Number(exp.value);
                let m = Number(exp2.value);
                let valor = [];
                for (var j = 0; j < m; j++) {
                    let val2 = [];
                    for (var i = 0; i < n; i++) {
                        val2.push(Boolean(true));
                    }
                    valor.push(val2);
                }
                const condicion = env.guardar_Matriz(this.nombre, this.line, this.column, valor, this.tipo, exp.value, exp2.value);
                if (condicion) {
                    console.log("variable [" + this.nombre + "] ingresada...");
                }
                else {
                    console.log("variable [" + this.nombre + "] no ingresada...");
                }
            }
            else if (Type_1.Type.STRING == this.tipo) {
                let n = Number(exp.value);
                let m = Number(exp2.value);
                let valor = [];
                for (var j = 0; j < m; j++) {
                    let val2 = [];
                    for (var i = 0; i < n; i++) {
                        val2.push("");
                    }
                    valor.push(val2);
                }
                const condicion = env.guardar_Matriz(this.nombre, this.line, this.column, valor, this.tipo, exp.value, exp2.value);
                if (condicion) {
                    console.log("variable [" + this.nombre + "] ingresada...");
                }
                else {
                    console.log("variable [" + this.nombre + "] no ingresada...");
                }
            }
            else {
                sn.addError(new Error_1.Error(" Tipo de declaracion incorrecto", "SEMANTICO", this.line, this.column));
            }
        }
    }
    ast(s) {
        const name_node = `node_${this.line}_${this.column}_`;
        s.add_ast(`
    ${name_node}[label="\\<Instruccion\\>\\Matriz Declaracion New"];
    ${name_node}1[label="\\<Nombre\\>\\n{${this.nombre}}"];
    ${name_node}2[label="\\<Tipo\\>\\n${this.tipo}"];
    ${name_node}->${name_node}1;
    ${name_node}->${name_node}2;
    `);
    }
}
exports.DeclaracionMatrizNew = DeclaracionMatrizNew;
