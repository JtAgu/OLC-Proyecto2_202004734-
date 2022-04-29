"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintLn = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const ts_graphviz_1 = require("ts-graphviz");
class PrintLn extends Instruccion_1.Instruccion {
    constructor(expresion, line, column) {
        super(line, column);
        this.expresion = expresion;
    }
    execute2(env) {
    }
    execute(env, sn) {
        let exp = this.expresion.execute(env, sn);
        sn.addMsg(exp.value + '\n');
        //return exp.value+"\n"
    }
    getNode(env, sn) {
        var idnodo = this.line + this.column;
        const g = (0, ts_graphviz_1.digraph)('G');
        const clave = g.createNode('INSTRUCCION_PRINTLN');
        const println = g.createNode('println');
        const ParA = g.createNode('(');
        const ParC = g.createNode(')');
        const PyC = g.createNode(';');
    }
    ast(s) {
        const nombreNodo = `node_${this.line}_${this.column}_`;
        s.add_ast(`
    ${nombreNodo}[label="\\<Instruccion\\>\\nPrintLn"];
    ${nombreNodo}1[label="\\<VALOR\\>\\n"];
    ${nombreNodo}->${nombreNodo}1
    
    ${nombreNodo}1->${this.expresion.ast(s)}`);
    }
}
exports.PrintLn = PrintLn;
