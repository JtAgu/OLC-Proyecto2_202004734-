"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WHILE = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
const decremento_1 = require("./decremento");
const Error_1 = require("./Error");
const Incremento_1 = require("./Incremento");
class WHILE extends Instruccion_1.Instruccion {
    constructor(expresion, Intrucciones, line, column) {
        super(line, column);
        this.expresion = expresion;
        this.Intrucciones = Intrucciones;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let exp = this.expresion.execute(env, sn);
        var envWh = new Environment_1.Environment(env, "AMBIENTE SWITCH");
        if (exp.type == Type_1.Type.BOOLEAN) {
            while (exp.value) {
                var breakOp = false;
                if (this.Intrucciones != null) {
                    envWh = new Environment_1.Environment(env, "AMBIENTE SWITCH");
                    for (const x of this.Intrucciones) {
                        var corte = x.execute(envWh, sn);
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
                exp = this.expresion.execute(env, sn);
            }
            sn.addEnv(envWh);
        }
        else {
            sn.addError(new Error_1.Error(" Condicion de While debe ser boolean", "SEMANTICO", this.line, this.column));
        }
    }
    ast(s) {
        const name_node = `node_${this.line}_${this.column}_`;
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nwhile"];
        ${name_node}1[label="\\<Condicion\\>"];
        ${name_node}->${name_node}1;
        ${name_node}1->${this.expresion.ast(s)}        
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
exports.WHILE = WHILE;
