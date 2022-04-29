import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Error } from "./Error";

export class TYPEOFF extends Instruccion {
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
        let result = {
            value: "",
            type: Type.error
        }
        let exp=this.expresion.execute(env,sn);
        if(exp.type==Type.ID){
             result = {
                value: "vector",
                type: Type.STRING
            }
        }else if(exp.type==Type.DECIMAL){
             result = {
                value: "double",
                type: Type.STRING
            }
        }else if(exp.type==Type.NUMBER){
             result = {
                value: "int",
                type: Type.STRING
            }
        }else if(exp.type==Type.CHAR){
             result = {
                value: "char",
                type: Type.STRING
            }
        }else if(exp.type==Type.STRING){
             result = {
                value: "String",
                type: Type.STRING
            }
        }else if(exp.type==Type.BOOLEAN){
             result = {
                value: "boolean",
                type: Type.STRING
            }
        }else{
            sn.addError(new Error(" VALOR ERRONEA PARA TYPE_OF", "SEMANTICO", this.line, this.column));
          }
        
        
        return result;
    }
    public ast(s:Singleton) {

        const nombreNodo = `node_${this.line}_${this.column}_`
        return `
        ${nombreNodo};
        ${nombreNodo}[label="TypeOf"];
        ${nombreNodo}->${this.expresion.ast(s)}
        `
    }
}