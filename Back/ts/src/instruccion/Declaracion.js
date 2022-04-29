"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Declaracion = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
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
                    const condicion = env.guardar_variable(id, this.line, this.column, exp.value, this.tipo);
                    if (condicion) {
                        console.log("variable [" + id + "] ingresada...");
                    }
                    else {
                        console.log("variable [" + id + "] no ingresada...");
                    }
                }
                else {
                    console.log("Error");
                    sn.addError(new Error_1.Error(" Expresion con tipo diferente a [" + id + "]", "SEMANTICO", this.line, this.column));
                }
            }
        }
    }
    ast(s) {
        const nombreNodo = `node_${this.line}_${this.column}_`;
        s.add_ast(`
    ${nombreNodo}[label="\\<Instruccion\\>\\nDeclaracion const"];
    
    ${nombreNodo}1[label="\\<Nombre\\>"];`);
        for (const x of this.nombre) {
            s.add_ast(`${nombreNodo}${x}[label="\\n${x}"]\n;
                ${nombreNodo}1->${nombreNodo}${x}\n`);
        }
        s.add_ast(`
    ${nombreNodo}2[label="\\<Tipo\\>\\n${(0, Type_1.getType)(this.tipo)}}"];
    ${nombreNodo}->${nombreNodo}1
    ${nombreNodo}->${nombreNodo}2`);
        if (this.expresion != null) {
            s.add_ast(`
      ${nombreNodo}->${this.expresion.ast(s)}`);
        }
        return nombreNodo;
    }
}
exports.Declaracion = Declaracion;
