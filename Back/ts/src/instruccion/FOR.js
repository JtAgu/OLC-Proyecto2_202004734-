"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FOR = void 0;
const Instruccion_1 = require("../abstract/Instruccion");
const Environment_1 = require("../simbolos/Environment");
const Type_1 = require("../simbolos/Type");
class FOR extends Instruccion_1.Instruccion {
    constructor(Param1, expresionB, Param2, Intrucciones, line, column) {
        super(line, column);
        this.Param1 = Param1;
        this.expresionB = expresionB;
        this.Param2 = Param2;
        this.Intrucciones = Intrucciones;
    }
    execute(env) {
        const envFor = new Environment_1.Environment(env);
        this.Param1.execute(envFor);
        let exp = this.expresionB.execute(envFor);
        if (exp.type == Type_1.Type.BOOLEAN) {
            while (Boolean(exp.value)) {
                var breakOp = false;
                if (this.Intrucciones != null) {
                    for (const x of this.Intrucciones) {
                        var x2 = x.execute(envFor);
                        if (x2 != undefined) {
                            if (x2) {
                                breakOp = true;
                                break;
                            }
                            else {
                                break;
                            }
                        }
                    }
                    if (breakOp) {
                        breakOp = false;
                        break;
                    }
                }
                this.Param2.execute(envFor);
                exp = this.expresionB.execute(envFor);
            }
        }
    }
}
exports.FOR = FOR;
