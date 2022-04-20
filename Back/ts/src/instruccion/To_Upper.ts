import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class TO_UPPER extends Instruccion {
  constructor(
    public expresion: Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

    public execute(env: Environment) {
        let exp=this.expresion.execute(env);
        let result = {
            value: null,
            type: Type.error
        }
        if(exp.type==Type.STRING){
            result = {
                value:exp.value.toUpperCase(),
                type: Type.STRING
            }
            return result;
        }
        return result;
    }
}