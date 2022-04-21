"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLAMADA = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
class LLAMADA extends Instruccion_1.Instruccion {
    constructor(NomFuncion, ListaParam, line, column) {
        super(line, column);
        this.NomFuncion = NomFuncion;
        this.ListaParam = ListaParam;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let result = {
            value: null,
            type: Type_1.Type.error
        };
        if (env.buscar_variable(this.NomFuncion)) {
            let Param = env.getParam_variable(this.NomFuncion);
            let Ins = env.getIns_variable(this.NomFuncion);
            const envFc = new Environment_1.Environment(env);
            if (Param != null && this.ListaParam != null && Ins != null) {
                if (Param.length == this.ListaParam.length) {
                    for (var i = 0; i < Param.length; i++) {
                        Param[i].expresion = this.ListaParam[i];
                        var l = [];
                        l.push(Param[i].nombre);
                        Param[i].nombre = l;
                        Param[i].execute(envFc, sn);
                    }
                    for (const Instruccion of Ins) {
                        result = Instruccion.execute(envFc, sn);
                        if (result != undefined) {
                            if (result.type == env.getTipo_variable(this.NomFuncion)) {
                                return result;
                            }
                            else {
                                console.log("error semantico, tipo de exp diferente a [" + this.NomFuncion + "]");
                            }
                        }
                    }
                }
            }
            else if (Ins != null) {
                for (const Instruccion of Ins) {
                    result = Instruccion.execute(envFc, sn);
                    if (result != undefined) {
                        if (result.type == env.getTipo_variable(this.NomFuncion)) {
                            return result;
                        }
                        else {
                            console.log("error semantico, tipo de exp diferente a [" + this.NomFuncion + "]");
                        }
                    }
                }
            }
        }
        else {
            console.log("error semantico, llamada de variable [" + this.NomFuncion + "] no existente");
            return result;
        }
    }
}
exports.LLAMADA = LLAMADA;
