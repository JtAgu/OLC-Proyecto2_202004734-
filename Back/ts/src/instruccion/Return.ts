import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class RETURN extends Instruccion {
    constructor(        
        public expresion: Expression|null,
        line: number,
        column: number
    ) {
        super(line, column);
    }
    public execute2(env: Environment) {
    }
    public execute(env: Environment,sn:Singleton):Retorno {
        let val={
            value:null,
            type:Type.VOID
        }
        if(this.expresion!=null){
            let exp=this.expresion.execute(env,sn);
            let val={
                value:exp.value,
                type:exp.type
            }
            return val;
        }

        return val;
        
        


        
    }
}