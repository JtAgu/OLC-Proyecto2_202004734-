"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTINUE = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
class CONTINUE extends Instruccion_1.Instruccion {
    constructor(line, column) {
        super(line, column);
    }
    execute(env) {
        return false;
    }
}
exports.CONTINUE = CONTINUE;
