import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Error } from "./Error";

export class FOR extends Instruccion {
    constructor(
        public Param1: Instruccion,
        public expresionB: Expression,
        public Param2: Instruccion,
        public Intrucciones: Array<Instruccion> | null,
        line: number,
        column: number
    ) {
        super(line, column);
    }
    public execute2(env: Environment) {
    }
    public execute(env: Environment,sn:Singleton) {
        const envFor = new Environment(env);
        this.Param1.execute(envFor,sn);
        let exp = this.expresionB.execute(envFor,sn);
        if (exp.type == Type.BOOLEAN) {

            while (Boolean(exp.value)) {
                const envFor2 = new Environment(envFor);
                var breakOp = false
                if (this.Intrucciones != null) {
                    for (const x of this.Intrucciones) {
                        var corte: Retorno = x.execute(envFor2,sn);
                        if (corte != undefined) {
                            if (corte.type == Type.BREAK) {
                                breakOp = true;
                                break;
                            } else if (corte.type == Type.CONTINUE) {
                                break;
                            } else {
                                return corte;
                            }
                        }
                    }
                    if (breakOp) {
                        breakOp = false;
                        break;
                    }
                }
                this.Param2.execute(envFor,sn);
                exp = this.expresionB.execute(envFor,sn);
            }
        }else{
            sn.addError(new Error(" Condicion de for debe ser boolean", "SEMANTICO", this.line, this.column));
        }


    }
}
