"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ELSE = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
const decremento_1 = require("./decremento");
const Incremento_1 = require("./Incremento");
class ELSE extends Instruccion_1.Instruccion {
    constructor(Intrucciones, line, column) {
        super(line, column);
        this.Intrucciones = Intrucciones;
    }
    execute2(env) {
    }
    execute(env, sn) {
        if (this.Intrucciones != null) {
            const envElse = new Environment_1.Environment(env, "AMBIENTE ELSE");
            for (const x of this.Intrucciones) {
                var corte = x.execute(envElse, sn);
                if (corte != undefined && corte.type != Type_1.Type.VOID) {
                    return corte;
                }
            }
            sn.addEnv(envElse);
        }
    }
    ast(s) {
        const name_node = `node_${this.line}_${this.column}_`;
        s.add_ast(`
      ${name_node}[label="\\<Instruccion\\>\\nelse"];`);
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
exports.ELSE = ELSE;
