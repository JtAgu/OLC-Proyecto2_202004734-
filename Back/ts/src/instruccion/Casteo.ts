import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class Casteo extends Instruccion {
  constructor(
    public nombre: string,
    public tipo: Type,
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
            if (exp.type == this.tipo){
                console.log(exp.type);
                const condicion = env.guardar_variable(this.nombre, exp.value, this.tipo);
                if (condicion){
                    console.log("variable ["+this.nombre+"] ingresada...");
                }else{
                    console.log("variable ["+this.nombre+"] no ingresada...");
                }
            }else{
                console.log("error semantico, declaracion de variable ["+this.nombre+"] no correcta");
            }
        }
    }
}