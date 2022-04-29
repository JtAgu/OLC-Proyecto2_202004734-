"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignacionMatriz = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class AsignacionMatriz extends Instruccion_1.Instruccion {
    constructor(nombre, expresionN, expresionN2, expresion, line, column) {
        super(line, column);
        this.nombre = nombre;
        this.expresionN = expresionN;
        this.expresionN2 = expresionN2;
        this.expresion = expresion;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let exp = this.expresion.execute(env, sn);
        let n = this.expresionN.execute(env, sn);
        let n2 = this.expresionN2.execute(env, sn);
        if (env.buscar_variable(this.nombre)) {
            if (env.getDimension_variable(this.nombre) == 3) {
                //ahora toca ver que sean del mismo tipo
                if (exp.type == env.getTipo_variable(this.nombre) && n.type == Type_1.Type.NUMBER && n.value < env.getDim1_Vector(this.nombre) && n2.type == Type_1.Type.NUMBER && n2.value < env.getDim1_Vector(this.nombre)) {
                    env.actualizar_Matriz(this.nombre, exp.value, n.value, n2.value);
                    console.log("variable [" + this.nombre + "] actualizada con exito...");
                }
                else {
                    sn.addError(new Error_1.Error("Asignacion a [" + this.nombre + "] erronea", "SEMANTICO", this.line, this.column));
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
        const nombre_nodo = `node_${this.line}_${this.column}_`;
        s.add_ast(`
    ${nombre_nodo}[label="\\<Instruccion\\>\\nAsignacion"];
    ${nombre_nodo}1[label="\\<Nombre\\>\\n${this.nombre}"];
    ${nombre_nodo}->${nombre_nodo}1;
    ${nombre_nodo}->${this.expresion.ast(s)}
    `);
    }
}
exports.AsignacionMatriz = AsignacionMatriz;
