import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class TO_STRING extends Instruccion {
  constructor(
    public expresion: Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

    public execute(env: Environment) {
        let exp=this.expresion.execute(env);
        let result:Retorno = {
            value: null,
            type: Type.error
        }
        if(exp.type!=Type.STRING){
            result = {
                value: exp.value,
                type: Type.STRING
            }
            return result;
        }else{
            console.log("Error semantico")
        }
        return result;
    }
}