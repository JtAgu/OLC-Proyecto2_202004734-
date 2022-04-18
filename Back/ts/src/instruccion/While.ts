import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class WHILE extends Instruccion {
    constructor(
        public expresion: Expression,
        public Intrucciones: Array<Instruccion> | null,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public execute(env: Environment) {
        let exp = this.expresion.execute(env);
        if (exp.type == Type.BOOLEAN) {
            while (exp.value) {
                if (this.Intrucciones != null) {
                    const envWh = new Environment(env);
                    for (const x of this.Intrucciones) {
                        x.execute(envWh);
                    }
                }
                exp = this.expresion.execute(env);
            }
            
        }
    }
}
