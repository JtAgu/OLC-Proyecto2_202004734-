"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BREAK = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
class BREAK extends Instruccion_1.Instruccion {
    constructor(line, column) {
        super(line, column);
    }
    execute(env) {
        return true;
    }
}
exports.BREAK = BREAK;
