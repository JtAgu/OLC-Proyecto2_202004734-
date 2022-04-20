import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";

export class BREAK extends Instruccion {
    constructor(        
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public execute(env: Environment):Boolean {
        return true;
    }
}
