import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class ROUND extends Instruccion {
  constructor(
    public expresion: Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute2(env: Environment) {
  }
    public execute(env: Environment,sn:Singleton) {
        let exp=this.expresion.execute(env,sn);
        let result:Retorno = {
            value: null,
            type: Type.error
        }
        if(exp.type==Type.DECIMAL||exp.type==Type.NUMBER){
            result = {
                value: Math.round(exp.value),
                type: Type.STRING
            }
            return result;
        }
        return result;
    }
}