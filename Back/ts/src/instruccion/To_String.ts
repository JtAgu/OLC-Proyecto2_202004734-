import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Error } from "./Error";

export class TO_STRING extends Instruccion {
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
        if(exp.type!=Type.STRING){
            result = {
                value: exp.value,
                type: Type.STRING
            }
            return result;
        }else {
            sn.addError(new Error(" VALOR ERRONEA PARA TO_STRING", "SEMANTICO", this.line, this.column));
        }
        return result;
    }
    public ast(s:Singleton) {

      const nombreNodo = `node_${this.line}_${this.column}_`
      return `
      ${nombreNodo};
      ${nombreNodo}[label="To_String"];
      ${nombreNodo}->${this.expresion.ast(s)}
      `
  }
}