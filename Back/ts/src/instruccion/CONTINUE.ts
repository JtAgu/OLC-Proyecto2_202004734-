import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";

export class CONTINUE extends Instruccion {
    constructor(        
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public execute(env: Environment):Boolean {
        return false;
    }
}