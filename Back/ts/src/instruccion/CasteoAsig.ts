import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Error } from "./Error";

export class CasteoAsig extends Instruccion {
  constructor(
    public nombre: string,
    public expresion:Expression,
    public TipoCambio: Type,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute2(env: Environment) {
  }
  public execute(env: Environment,sn:Singleton) {
    let Aceptado=false;
    let exp= this.expresion.execute(env,sn)
    if(env.buscar_variable(this.nombre)){
      //ahora toca ver que sean del mismo tipo
      if(exp.type==Type.NUMBER && this.TipoCambio==Type.DECIMAL){
        exp.type=this.TipoCambio;
        Aceptado=true;
    }else if(exp.type==Type.DECIMAL && this.TipoCambio==Type.NUMBER){
        exp.type=this.TipoCambio;
        exp.value=exp.value.toFixed(0)
        Aceptado=true;
    }else if(exp.type==Type.NUMBER && this.TipoCambio==Type.STRING){
        exp.type=this.TipoCambio;
        Aceptado=true;
    }else if(exp.type==Type.NUMBER && this.TipoCambio==Type.CHAR){
        exp.type=this.TipoCambio;
        exp.value=String.fromCharCode(Number(exp.value));
        Aceptado=true;
    }else if(exp.type==Type.DECIMAL && this.TipoCambio==Type.STRING){
        exp.type=this.TipoCambio;
        Aceptado=true;
    }else if(exp.type==Type.CHAR && this.TipoCambio==Type.NUMBER){
        exp.type=this.TipoCambio;
        exp.value=exp.value.charCodeAt(0);
        Aceptado=true;
    }else if(exp.type==Type.CHAR && this.TipoCambio==Type.DECIMAL){
        exp.type=this.TipoCambio;
        exp.value=exp.value.charCodeAt(0);
        Aceptado=true;
        }
      if(Aceptado){
        if (exp.type== env.getTipo_variable(this.nombre)){
            env.actualizar_variable(this.nombre, exp.value)
            console.log("variable ["+this.nombre+"] actualizada con exito...");
            
          }else{
            sn.addError(new Error(" Expresion con tipo diferente a ["+this.nombre+"]", "SEMANTICO", this.line, this.column));
          }
      }
      
      
    }else{
      sn.addError(new Error("variable ["+this.nombre+"] no fue encontrada", "SEMANTICO", this.line, this.column));
    }
  }
}