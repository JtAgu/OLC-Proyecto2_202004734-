"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RETURN = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
class RETURN extends Instruccion_1.Instruccion {
    constructor(expresion, line, column) {
        super(line, column);
        this.expresion = expresion;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let val = {
            value: null,
            type: Type_1.Type.VOID
        };
        if (this.expresion != null) {
            let exp = this.expresion.execute(env, sn);
            //console.log("Return",exp);
            val = {
                value: exp.value,
                type: exp.type
            };
            return val;
        }
        return val;
    }
    ast(s) {
        const name_node = `node_${this.line}_${this.column}_`;
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nreturn"];
        `);
        if (this.expresion != null) {
            s.add_ast(`
            ${name_node}->${name_node}1;
            ${name_node}1[label="\\<EXPRESION\\>"];
            ${name_node}1->${this.expresion.ast(s)}
            `);
        }
    }
}
exports.RETURN = RETURN;
