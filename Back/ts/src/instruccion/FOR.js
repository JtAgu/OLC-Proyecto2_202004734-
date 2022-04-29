"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FOR = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
const decremento_1 = require("./decremento");
const Error_1 = require("./Error");
const Incremento_1 = require("./Incremento");
class FOR extends Instruccion_1.Instruccion {
    constructor(Param1, expresionB, Param2, Intrucciones, line, column) {
        super(line, column);
        this.Param1 = Param1;
        this.expresionB = expresionB;
        this.Param2 = Param2;
        this.Intrucciones = Intrucciones;
    }
    execute2(env) {
    }
    execute(env, sn) {
        const envFor = new Environment_1.Environment(env, "AMBIENTE FOR");
        this.Param1.execute(envFor, sn);
        let exp = this.expresionB.execute(envFor, sn);
        var envFor2 = new Environment_1.Environment(envFor, "AMBIENTE FOR");
        if (exp.type == Type_1.Type.BOOLEAN) {
            while (Boolean(exp.value)) {
                envFor2 = new Environment_1.Environment(envFor, "AMBIENTE FOR");
                var breakOp = false;
                if (this.Intrucciones != null) {
                    for (const x of this.Intrucciones) {
                        var corte = x.execute(envFor2, sn);
                        if (corte != undefined) {
                            if (corte.type == Type_1.Type.BREAK) {
                                breakOp = true;
                                break;
                            }
                            else if (corte.type == Type_1.Type.CONTINUE) {
                                break;
                            }
                            else {
                                return corte;
                            }
                        }
                    }
                    if (breakOp) {
                        breakOp = false;
                        break;
                    }
                }
                this.Param2.execute(envFor, sn);
                exp = this.expresionB.execute(envFor, sn);
            }
            sn.addEnv(envFor);
            sn.addEnv(envFor2);
        }
        else {
            sn.addError(new Error_1.Error(" Condicion de for debe ser boolean", "SEMANTICO", this.line, this.column));
        }
    }
    ast(s) {
        const name_node = `node_${this.line}_${this.column}_`;
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nFOR"];
        ${name_node}1[label="\\<Asignacion\\>"];
        ${name_node}2[label="\\<Condicion\\>"];
        ${name_node}3[label="\\<Actualizacion\\>"];
        ${name_node}->${name_node}1;
        ${name_node}->${name_node}2;
        ${name_node}->${name_node}3;
        ${name_node}1->${this.Param1.ast(s)}        
        ${name_node}2->${this.expresionB.ast(s)}        
        ${name_node}3->${this.Param2.ast(s)}        
        `);
        if (this.Intrucciones != null) {
            for (const x of this.Intrucciones) {
                s.add_ast(`
                ${name_node}->node_${x.line}_${x.column}_;        
                `);
                var t = x.ast(s);
                if (x instanceof Incremento_1.Incremento || x instanceof decremento_1.Decremento) {
                    s.add_ast(t + "");
                }
            }
        }
    }
}
exports.FOR = FOR;
