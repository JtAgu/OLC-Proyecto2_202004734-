"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclaracionVacio = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class DeclaracionVacio extends Instruccion_1.Instruccion {
    constructor(nombre, tipo, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.tipo = tipo;
    }
    execute2(env) {
    }
    execute(env, sn) {
        for (const id of this.nombre) {
            if (this.tipo == Type_1.Type.NUMBER) {
                const condicion = env.guardar_variable(id, this.line, this.column, Number(0), this.tipo);
                if (condicion) {
                    console.log("variable [" + id + "] ingresada por defecto...");
                }
                else {
                    console.log("variable [" + id + "] no ingresada...");
                }
            }
            else if (this.tipo == Type_1.Type.DECIMAL) {
                const condicion = env.guardar_variable(id, this.line, this.column, Number(0.0), this.tipo);
                if (condicion) {
                    console.log("variable [" + id + "] ingresada por defecto...");
                }
                else {
                    console.log("variable [" + id + "] no ingresada...");
                }
            }
            else if (this.tipo == Type_1.Type.CHAR) {
                const condicion = env.guardar_variable(id, this.line, this.column, '0', this.tipo);
                if (condicion) {
                    console.log("variable [" + id + "] ingresada por defecto...");
                }
                else {
                    console.log("variable [" + id + "] no ingresada...");
                }
            }
            else if (this.tipo == Type_1.Type.BOOLEAN) {
                const condicion = env.guardar_variable(id, this.line, this.column, Boolean(true), this.tipo);
                if (condicion) {
                    console.log("variable [" + id + "] ingresada por defecto...");
                }
                else {
                    console.log("variable [" + id + "] no ingresada...");
                }
            }
            else if (this.tipo == Type_1.Type.STRING) {
                const condicion = env.guardar_variable(id, this.line, this.column, '', this.tipo);
                if (condicion) {
                    console.log("variable [" + id + "] ingresada por defecto...");
                }
                else {
                    console.log("variable [" + id + "] no ingresada...");
                }
            }
            else {
                sn.addError(new Error_1.Error("Declaracion de [" + id + "] incorrecta", "SEMANTICO", this.line, this.column));
            }
        }
    }
    ast(s) {
        const nombreNodo = `node_${this.line}_${this.column}_`;
        s.add_ast(`
    ${nombreNodo}[label="\\<Instruccion\\>\\nDeclaracion vacio"];
    ${nombreNodo}1[label="\\<Nombre\\>"];`);
        for (const x of this.nombre) {
            s.add_ast(`${nombreNodo}${x}[label="\\n${x}"]\n;
                ${nombreNodo}1->${nombreNodo}${x}\n`);
        }
        s.add_ast(`
    ${nombreNodo}2[label="\\<Tipo\\>\\n${(0, Type_1.getType)(this.tipo)}"];
    ${nombreNodo}->${nombreNodo}1
    ${nombreNodo}->${nombreNodo}2
    `);
    }
}
exports.DeclaracionVacio = DeclaracionVacio;
