"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclaracionMatrizLista = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Error_1 = require("./Error");
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
                    sn.addError(new Error_1.Error(" Expresion con tipo diferente a [" + this.nombre + "]", "SEMANTICO", this.line, this.column));
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
            const condicion = env.guardar_Matriz(this.nombre, this.line, this.column, val, this.tipo, i, j);
            if (condicion) {
                console.log("variable [" + this.nombre + "] ingresada...");
            }
            else {
                console.log("variable [" + this.nombre + "] no ingresada...");
            }
        }
        else {
            sn.addError(new Error_1.Error(" Expresion con tipo diferente a [" + this.nombre + "]", "SEMANTICO", this.line, this.column));
        }
    }
    ast(s) {
        const name_node = `node_${this.line}_${this.column}_`;
        s.add_ast(`
    ${name_node}[label="\\<Instruccion\\>\\nArray Declaracion Lista"];
    ${name_node}1[label="\\<Nombre\\>\\n{${this.nombre}}"];
    ${name_node}2[label="\\<Tipo\\>\\n${this.tipo}"];
    ${name_node}3[label="\\<Contenido\\>"];
    ${name_node}->${name_node}1;
    ${name_node}->${name_node}2;
    ${name_node}->${name_node}3;
    `);
        var i = 0;
        this.valores.forEach(element => {
            s.add_ast(`
        ${name_node}3->${name_node}3__${i}
        `);
            element.forEach(e => {
                s.add_ast(`
          ${name_node}3__${i}->${e.ast(s)}
          `);
            });
            i++;
        });
    }
}
exports.DeclaracionMatrizLista = DeclaracionMatrizLista;
