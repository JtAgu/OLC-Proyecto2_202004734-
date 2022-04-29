"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcion = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
class Funcion extends Instruccion_1.Instruccion {
    constructor(Nombre, Parametros, Intrucciones, Typo, line, column) {
        super(line, column);
        this.Nombre = Nombre;
        this.Parametros = Parametros;
        this.Intrucciones = Intrucciones;
        this.Typo = Typo;
    }
    execute2(env) {
    }
    execute(env, sn) {
        if (this.Parametros != null) {
            const condicion = env.guardar_Funcion(this.Nombre, this.line, this.column, this.Typo, this.Intrucciones, this.Parametros);
            if (condicion) {
                console.log("variable [" + this.Nombre + "] ingresada...");
            }
            else {
                console.log("variable [" + this.Nombre + "] no ingresada...");
            }
        }
        else {
            const condicion = env.guardar_Funcion(this.Nombre, this.line, this.column, this.Typo, this.Intrucciones, null);
            if (condicion) {
                console.log("variable [" + this.Nombre + "] ingresada...");
            }
            else {
                console.log("variable [" + this.Nombre + "] no ingresada...");
            }
        }
    }
    ast(s) {
        const name_node = `node_${this.line}_${this.column}_`;
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nFuncion_Metodo"];
        ${name_node}1[label="\\<Nombre\\>"];
        ${name_node}1->${name_node}3; 
        ${name_node}3[label="\\<${this.Nombre}\\>"];
        ${name_node}2[label="\\<Parametros\\>"];
        ${name_node}->${name_node}1;        
        ${name_node}->${name_node}2;
        ${name_node}1->${name_node}3;
        `);
        //console.log(this.Parametros);
        console.log(this.Intrucciones);
        if (this.Parametros != null) {
            for (const x of this.Parametros) {
                s.add_ast(`
                ${name_node}2->${x.ast(s)};        
                `);
            }
        }
        if (this.Intrucciones != null) {
            for (const x of this.Intrucciones) {
                x.ast(s);
                s.add_ast(`
                    ${name_node}->node_${x.line}_${x.column}_;        
                `);
            }
        }
    }
}
exports.Funcion = Funcion;
