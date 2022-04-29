"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclaracionVectorLista = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
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
                    sn.addError(new Error_1.Error("Declaracion de [" + this.nombre + "] con tipo incorrecto", "SEMANTICO", this.line, this.column));
                    Concordancia = false;
                    break;
                }
            }
            if (Concordancia) {
                const condicion = env.guardar_Vector(this.nombre, this.line, this.column, val, this.tipo, val.length);
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
                const condicion = env.guardar_Vector(this.nombre, this.line, this.column, val, this.tipo, val.length);
                if (condicion) {
                    console.log("variable [" + this.nombre + "] ingresada...");
                }
                else {
                    console.log("variable [" + this.nombre + "] no ingresada...");
                }
            }
        }
    }
    ast(s) {
        const name_node = `node_${this.line}_${this.column}_`;
        s.add_ast(`
    ${name_node}[label="\\<Instruccion\\>\\nArray Declaracion"];
    ${name_node}1[label="\\<Nombre\\>\\n{${this.nombre}}"];
    ${name_node}2[label="\\<Tipo\\>\\n${this.tipo}"];
    ${name_node}3[label="\\<Contenido\\>"];
    ${name_node}->${name_node}1;
    ${name_node}->${name_node}2;
    ${name_node}->${name_node}3;
    `);
        if (this.valores != null) {
            this.valores.forEach(element => {
                s.add_ast(`
        ${name_node}3->${element.ast(s)}
        `);
            });
        }
    }
}
exports.DeclaracionVectorLista = DeclaracionVectorLista;
