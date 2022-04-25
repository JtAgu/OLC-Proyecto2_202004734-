"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
class Error {
    constructor(Lexema, tipo, line, column) {
        this.Lexema = Lexema;
        this.tipo = tipo;
        this.line = line;
        this.column = column;
    }
}
exports.Error = Error;
