import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class DeclaracionTernario extends Instruccion {
  constructor(
    public nombre: string,
    public tipo: Type,
    public expresion:Expression,
    public expresionV:Expression,
    public expresionF:Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment) {
    
    let exp= this.expresion.execute(env)
    let expV= this.expresionV.execute(env)
    let expF= this.expresionF.execute(env)
    
    
    if (expV.type == this.tipo&&expF.type == this.tipo){
      if(exp.type==Type.BOOLEAN){
        if(Boolean(exp.value)){
          const condicion = env.guardar_variable(this.nombre, expV, this.tipo);
          if (condicion){
            console.log("variable ["+this.nombre+"] ingresada...");
          }else{
            console.log("variable ["+this.nombre+"] no ingresada...");
          }
        }else{
          const condicion = env.guardar_variable(this.nombre, expF, this.tipo);
          if (condicion){
            console.log("variable ["+this.nombre+"] ingresada...");
          }else{
            console.log("variable ["+this.nombre+"] no ingresada...");
          }
        }
      } 
    }else{
      console.log("error semantico, declaracion de variable ["+this.nombre+"] no correcta");
    }
    
  }
}