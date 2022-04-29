"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SWITCHCASE = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
class SWITCHCASE extends Instruccion_1.Instruccion {
    constructor(ExpresionC, ListaIns, PBreak, line, column) {
        super(line, column);
        this.ExpresionC = ExpresionC;
        this.ListaIns = ListaIns;
        this.PBreak = PBreak;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let result = {
            value: null,
            type: Type_1.Type.error
        };
        if (this.ListaIns != null) {
            for (const x of this.ListaIns) {
                x.execute(env, sn);
            }
        }
        if (this.PBreak != null) {
            result = {
                value: null,
                type: Type_1.Type.BREAK
            };
            return result;
        }
        return result;
    }
    ast(s) {
        const name_node = `node_${this.line}_${this.column}_`;
        s.add_ast(`
    ${name_node}[label="\\<Instruccion\\>\\nCase"];
    ${name_node}1[label="\\<Condicion\\>"];
    ${name_node}->${name_node}1;
    ${name_node}1->${this.ExpresionC.ast(s)}        
    `);
        if (this.ListaIns != null) {
            for (const x of this.ListaIns) {
                s.add_ast(`
            ${name_node}->node_${x.line}_${x.column}_;        
            `);
                x.ast(s);
            }
        }
    }
}
exports.SWITCHCASE = SWITCHCASE;
