"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IF = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
const decremento_1 = require("./decremento");
const Error_1 = require("./Error");
const Incremento_1 = require("./Incremento");
class IF extends Instruccion_1.Instruccion {
    constructor(expresion, Intrucciones, SigIf, line, column) {
        super(line, column);
        this.expresion = expresion;
        this.Intrucciones = Intrucciones;
        this.SigIf = SigIf;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let exp = this.expresion.execute(env, sn);
        if (exp.type == Type_1.Type.BOOLEAN) {
            const envIf = new Environment_1.Environment(env, "AMBIENTE IF");
            if (Boolean(exp.value) == Boolean(true)) {
                if (this.Intrucciones != null) {
                    for (const x of this.Intrucciones) {
                        var corte = x.execute(envIf, sn);
                        if (corte != undefined && corte.type != Type_1.Type.VOID) {
                            return corte;
                        }
                    }
                }
                sn.addEnv(envIf);
            }
            else {
                if (this.SigIf != null) {
                    var corte = this.SigIf.execute(envIf, sn);
                    if (corte != undefined && corte.type != Type_1.Type.VOID) {
                        return corte;
                    }
                }
            }
        }
        else {
            sn.addError(new Error_1.Error(" Condicion de IF debe ser boolean", "SEMANTICO", this.line, this.column));
        }
    }
    ast(s) {
        const name_node = `node_${this.line}_${this.column}_`;
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nif"];
        ${name_node}1[label="\\<True\\>"];
        ${name_node}2[label="\\<Else\\>"];
        ${name_node}->${name_node}1;
        ${name_node}->${name_node}2;
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
        if (this.SigIf != null) {
            s.add_ast(`${name_node}2->node_${this.SigIf.line}_${this.SigIf.column}_`);
            this.SigIf.ast(s);
        }
    }
}
exports.IF = IF;
