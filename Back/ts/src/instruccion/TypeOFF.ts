import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

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
        }
        
        
        return result;
    }
}