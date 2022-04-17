import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

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

  public execute(env: Environment) {
    let Aceptado=false;
    let exp= this.expresion.execute(env)
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
            console.log("error semantico, no se puede asignar un valor de otro tipo a la variable ["+this.nombre+"]");
          }
      }
      
      
    }else{
      console.log("la variable ["+this.nombre+"] no fue encontrada...");
      
    }
  }
}