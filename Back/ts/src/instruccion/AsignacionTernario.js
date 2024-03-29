"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignacionTernario = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class AsignacionTernario extends Instruccion_1.Instruccion {
    constructor(nombre, expresion, expresionV, expresionF, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.expresion = expresion;
        this.expresionV = expresionV;
        this.expresionF = expresionF;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let exp = this.expresion.execute(env, sn);
        let expV = this.expresionV.execute(env, sn);
        let expF = this.expresionF.execute(env, sn);
        if (env.buscar_variable(this.nombre)) {
            if (env.getDimension_variable(this.nombre) == 1) {
                //ahora toca ver que sean del mismo tipo
                if (expV.type == env.getTipo_variable(this.nombre) && expF.type == env.getTipo_variable(this.nombre)) {
                    if (exp.type == Type_1.Type.BOOLEAN) {
                        if (Boolean(exp.value)) {
                            env.actualizar_variable(this.nombre, expV.value);
                            console.log("variable [" + this.nombre + "] actualizada con exito...");
                        }
                        else {
                            env.actualizar_variable(this.nombre, expF.value);
                            console.log("variable [" + this.nombre + "] actualizada con exito...");
                        }
                    }
                }
                else {
                    sn.addError(new Error_1.Error("valor de otro tipo a [" + this.nombre + "]", "SEMANTICO", this.line, this.column));
                }
            }
            else {
                sn.addError(new Error_1.Error("Variable [" + this.nombre + "] con dimension distinta", "SEMANTICO", this.line, this.column));
            }
        }
        else {
            sn.addError(new Error_1.Error("variable [" + this.nombre + "] no fue encontrada", "SEMANTICO", this.line, this.column));
        }
    }
    ast(s) {
        const name_nodo = `node_${this.line}_${this.column}_`;
        s.add_ast(`
    ${name_nodo} [label="\\<Instruccion\\>\\n Asignacion ternario"];
    ${name_nodo}1[label="\\<ID\\>\n${name_nodo}"];
    ${name_nodo}2[label="\\<Instruccion verdadera\\>"];
    ${name_nodo}3[label="\\<Instruccion falsa\\>"];
    ${name_nodo}->${name_nodo}1;
    ${name_nodo}->${name_nodo}2;
    ${name_nodo}->${name_nodo}3;
    ${name_nodo}->${this.expresion.ast(s)}
    ${name_nodo}2->node_${this.expresionV.line}_${this.expresionV.column}_;
    ${name_nodo}3->node_${this.expresionF.line}_${this.expresionF.column}_;
    `);
        this.expresionV.ast(s);
        this.expresionF.ast(s);
    }
}
exports.AsignacionTernario = AsignacionTernario;
