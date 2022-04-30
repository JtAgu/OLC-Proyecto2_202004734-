"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWITCH = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
class SWITCH extends Instruccion_1.Instruccion {
    constructor(Expresion, ListaCase, Default, line, column) {
        super(line, column);
        this.Expresion = Expresion;
        this.ListaCase = ListaCase;
        this.Default = Default;
    }
    execute2(env) {
    }
    execute(env, sn) {
        const envSw = new Environment_1.Environment(env, "AMBIENTE SWITCH");
        if (this.ListaCase != null) {
            let expN = this.Expresion.execute(env, sn);
            let br = false;
            for (const x of this.ListaCase) {
                let exp = x.ExpresionC.execute(env, sn);
                if (exp.type == expN.type && exp.value == expN.value) {
                    var corte = x.execute(envSw, sn);
                    expN = this.Expresion.execute(env, sn);
                    if (corte.type == Type_1.Type.BREAK) {
                        br = true;
                        break;
                    }
                }
            }
            if (!br) {
                if (this.Default != null) {
                    for (const x of this.Default) {
                        x.execute(envSw, sn);
                    }
                }
            }
        }
        else if (this.Default != null) {
            for (const x of this.Default) {
                x.execute(envSw, sn);
            }
        }
        sn.addEnv(envSw);
    }
    ast(s) {
        const name_node = `node_${this.line}_${this.column}_`;
        s.add_ast(`
    ${name_node}[label="\\<Instruccion\\>\\nSwitch"];
    ${name_node}1[label="\\<Condicion\\>"];
    ${name_node}->${name_node}1;
    ${name_node}1->${this.Expresion.ast(s)}        
    `);
        if (this.ListaCase != null) {
            for (const x of this.ListaCase) {
                s.add_ast(`
            ${name_node}->node_${x.line}_${x.column}_;        
            `);
                x.ast(s);
            }
        }
        if (this.Default != null) {
            s.add_ast(`
            ${name_node}->${name_node}Default_;
            ${name_node}Default_[label="\\<Instruccion\\>\\nDEFAULT"];
      `);
            for (const x of this.Default) {
                s.add_ast(`
          ${name_node}Default_ -> node_${x.line}_${x.column}_;
        `);
                x.ast(s);
            }
        }
    }
}
exports.SWITCH = SWITCH;
