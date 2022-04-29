"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclaracionVectorNew = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class DeclaracionVectorNew extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, Dim1, tipo2, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.tipo = tipo;
        this.Dim1 = Dim1;
        this.tipo2 = tipo2;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let exp = this.Dim1.execute(env, sn);
        if (exp.type == Type_1.Type.NUMBER && this.tipo == this.tipo2) {
            if (Type_1.Type.NUMBER == this.tipo || Type_1.Type.DECIMAL == this.tipo) {
                let valor = [];
                let n = Number(exp.value);
                for (var i = 0; i < n; i++) {
                    valor[i] = 0;
                }
                const condicion = env.guardar_Vector(this.nombre, this.line, this.column, valor, this.tipo, exp.value);
                if (condicion) {
                    console.log("variable [" + this.nombre + "] ingresada...");
                }
                else {
                    console.log("variable [" + this.nombre + "] no ingresada...");
                }
            }
            else if (Type_1.Type.CHAR == this.tipo) {
                let valor = [];
                let n = Number(exp.value);
                for (var i = 0; i < n; i++) {
                    valor[i] = '0';
                }
                const condicion = env.guardar_Vector(this.nombre, this.line, this.column, valor, this.tipo, exp.value);
                if (condicion) {
                    console.log("variable [" + this.nombre + "] ingresada...");
                }
                else {
                    console.log("variable [" + this.nombre + "] no ingresada...");
                }
            }
            else if (Type_1.Type.BOOLEAN == this.tipo) {
                let valor = [];
                let n = Number(exp.value);
                for (var i = 0; i < n; i++) {
                    valor[i] = Boolean(true);
                }
                const condicion = env.guardar_Vector(this.nombre, this.line, this.column, valor, this.tipo, exp.value);
                if (condicion) {
                    console.log("variable [" + this.nombre + "] ingresada...");
                }
                else {
                    console.log("variable [" + this.nombre + "] no ingresada...");
                }
            }
            else if (Type_1.Type.STRING == this.tipo) {
                let valor = [];
                let n = Number(exp.value);
                for (var i = 0; i < n; i++) {
                    valor[i] = "";
                }
                const condicion = env.guardar_Vector(this.nombre, this.line, this.column, valor, this.tipo, exp.value);
                if (condicion) {
                    console.log("variable [" + this.nombre + "] ingresada...");
                }
                else {
                    console.log("variable [" + this.nombre + "] no ingresada...");
                }
            }
            else {
                sn.addError(new Error_1.Error("Declaracion de [" + this.nombre + "] incorrecta", "SEMANTICO", this.line, this.column));
            }
        }
        else {
            sn.addError(new Error_1.Error("Declaracion de [" + this.nombre + "] incorrecta", "SEMANTICO", this.line, this.column));
        }
    }
    ast(s) {
        const name_node = `node_${this.line}_${this.column}_`;
        s.add_ast(`
    ${name_node}[label="\\<Instruccion\\>\\nArray Declaracion"];
    ${name_node}1[label="\\<Nombre\\>\\n{${this.nombre}}"];
    ${name_node}2[label="\\<Tipo\\>\\n${this.tipo}"];
    
    ${name_node}->${name_node}1;
    ${name_node}->${name_node}2;
    
    `);
    }
}
exports.DeclaracionVectorNew = DeclaracionVectorNew;
