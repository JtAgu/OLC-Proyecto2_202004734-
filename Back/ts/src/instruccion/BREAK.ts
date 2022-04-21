import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class BREAK extends Instruccion {
    constructor(        
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public execute2(env: Environment) {
    }
    public execute(env: Environment,sn:Singleton):Retorno {
        let val={
            value:true,
            type:Type.BREAK
        }
        return val;
    }
}
