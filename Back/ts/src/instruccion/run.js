"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUN = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
const Error_1 = require("./Error");
class RUN extends Instruccion_1.Instruccion {
    constructor(NomFuncion, ListaParam, line, column) {
        super(line, column);
        this.NomFuncion = NomFuncion;
        this.ListaParam = ListaParam;
    }
    execute2(env, sn) {
        let result = {
            value: null,
            type: Type_1.Type.error
        };
        if (env.buscar_variable(this.NomFuncion)) {
            let Param = env.getParam_variable(this.NomFuncion);
            let Ins = env.getIns_variable(this.NomFuncion);
            const envFc = new Environment_1.Environment(env, "AMBIENTE FUNCION " + this.NomFuncion);
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
                                sn.addEnv(envFc);
                                return result;
                            }
                            else {
                                sn.addError(new Error_1.Error(" tipo de exp diferente a [" + this.NomFuncion + "]", "SEMANTICO", this.line, this.column));
                            }
                        }
                        sn.addEnv(envFc);
                    }
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
    }
    execute(env, sn) {
        return "RUN";
    }
    ast(s) {
        const nombre_nodo = `node_${this.line}_${this.column}_`;
        s.add_ast(`
        ${nombre_nodo} [label="\\<Instruccion\\>\\nRUN"];
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
    }
}
exports.RUN = RUN;
