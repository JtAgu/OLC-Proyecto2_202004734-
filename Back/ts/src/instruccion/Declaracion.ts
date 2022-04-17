import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class Declaracion extends Instruccion {
  constructor(
    public nombre: Array<string>,
    public tipo: Type,
    public expresion:Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment) {
    
    let exp= this.expresion.execute(env)
    
    for (const id of this.nombre){
      
      if (exp.type == this.tipo){
      
        const condicion = env.guardar_variable(id, exp.value, this.tipo);
        if (condicion){
          console.log("variable ["+id+"] ingresada...");
        }else{
          console.log("variable ["+id+"] no ingresada...");
        }
      }else{
        console.log("error semantico, declaracion de variable ["+id+"] no correcta");
      }
    }
    
  }
}