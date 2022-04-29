"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BREAK = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Type_1 = require("../simbolos/Type");
class BREAK extends Instruccion_1.Instruccion {
    constructor(line, column) {
        super(line, column);
    }
    execute2(env) {
    }
    execute(env, sn) {
        let val = {
            value: true,
            type: Type_1.Type.BREAK
        };
        return val;
    }
    ast(s) {
        const name_node = `node_${this.line}_${this.column}_`;
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nbreak"];
        `);
    }
}
exports.BREAK = BREAK;
