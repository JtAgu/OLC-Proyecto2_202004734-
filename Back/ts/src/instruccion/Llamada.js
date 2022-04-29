"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLAMADA = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
const Asignacion_1 = require("./Asignacion");
const Error_1 = require("./Error");
class LLAMADA extends Instruccion_1.Instruccion {
    constructor(NomFuncion, ListaParam, line, column) {
        super(line, column);
        this.NomFuncion = NomFuncion;
        this.ListaParam = ListaParam;
    }
    execute2(env) {
    }
    execute(env, sn) {
        var result = {
            value: null,
            type: Type_1.Type.error
        };
        var LP = [];
        if (env.buscar_variable(this.NomFuncion)) {
            let Param = env.getParam_variable(this.NomFuncion);
            let Ins = env.getIns_variable(this.NomFuncion);
            const envFc = new Environment_1.Environment(env, "AMBIENTE FUNCION " + this.NomFuncion);
            if (Param != null && this.ListaParam != null && Ins != null) {
                if (Param.length == this.ListaParam.length) {
                    for (var i = 0; i < Param.length; i++) {
                        if (!envFc.buscar_variable(Param[i].nombre[0] + "")) {
                            Param[i].expresion = this.ListaParam[i];
                            Param[i].execute(envFc, sn);
                        }
                        else {
                            var s = new Asignacion_1.Asignacion(Param[i].nombre[0], this.ListaParam[i].execute(envFc, sn).value, Param[i].line, Param[i].column);
                            s.execute(envFc, sn);
                            console.log(Param[i].nombre[0], envFc.getValue_variable(Param[i].nombre[0]));
                        }
                        //console.log(this.ListaParam[i].execute(envFc,sn));
                    }
                    for (const Instruccion of Ins) {
                        result = Instruccion.execute(envFc, sn);
                        if (result != undefined) {
                            if (result.type == env.getTipo_variable(this.NomFuncion)) {
                                sn.addEnv(envFc);
                                //console.log("Llamada",result)
                                return result;
                            }
                            else {
                                sn.addError(new Error_1.Error(" tipo de exp diferente a [" + this.NomFuncion + "]", "SEMANTICO", this.line, this.column));
                            }
                        }
                    }
                    sn.addEnv(envFc);
                }
                else {
                    sn.addError(new Error_1.Error("CANTIDAD DE PARAMETROS DISTINTA", "SEMANTICO", this.line, this.column));
                }
            }
            else if (Ins != null) {
                for (const Instruccion of Ins) {
                    result = Instruccion.execute(envFc, sn);
                    if (result != undefined) {
                        if (result.type == env.getTipo_variable(this.NomFuncion)) {
                            sn.addEnv(envFc);
                            return result;
                        }
                        else {
                            sn.addError(new Error_1.Error(" tipo de exp diferente a [" + this.NomFuncion + "]", "SEMANTICO", this.line, this.column));
                        }
                    }
                }
                sn.addEnv(envFc);
            }
        }
        else {
            sn.addError(new Error_1.Error(" Funcion [" + this.NomFuncion + "] inexistente", "SEMANTICO", this.line, this.column));
            return result;
        }
        return result;
    }
    ast(s) {
        const nombre_nodo = `node_${this.line}_${this.column}_`;
        s.add_ast(`
        ${nombre_nodo} [label="\\<Instruccion\\>\\nLlamada funcion"];
        ${nombre_nodo}1 [label="{${this.NomFuncion}}"];
        ${nombre_nodo}2 [label="<\\Parametros\\>"];
        ${nombre_nodo}->${nombre_nodo}2;
        ${nombre_nodo}->${nombre_nodo}1;
        `);
        if (this.ListaParam != null) {
            this.ListaParam.forEach(element => {
                s.add_ast(`
                ${nombre_nodo}2->${element.ast(s)}
                `);
            });
        }
        return nombre_nodo;
    }
}
exports.LLAMADA = LLAMADA;
