import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class DeclaracionVacio extends Instruccion {
  constructor(
    public nombre: Array<string>,
    public tipo: Type,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute2(env: Environment) {
  }
  public execute(env: Environment,sn:Singleton) {
    for (const id of this.nombre){

      if (this.tipo==Type.NUMBER){
        const condicion = env.guardar_variable(id, Number(0), this.tipo);
        if (condicion){
          console.log("variable ["+id+"] ingresada por defecto...");
        }else{
          console.log("variable ["+id+"] no ingresada...");
        }
      }else if (this.tipo==Type.DECIMAL){
          const condicion = env.guardar_variable(id, Number(0.0), this.tipo);
          if (condicion){
            console.log("variable ["+id+"] ingresada por defecto...");
          }else{
            console.log("variable ["+id+"] no ingresada...");
          }
      }else if (this.tipo==Type.CHAR){
          const condicion = env.guardar_variable(id, '0' , this.tipo);
          if (condicion){
            console.log("variable ["+id+"] ingresada por defecto...");
          }else{
            console.log("variable ["+id+"] no ingresada...");
          }
      }else if (this.tipo==Type.BOOLEAN){
          const condicion = env.guardar_variable(id, Boolean(true), this.tipo);
          if (condicion){
            console.log("variable ["+id+"] ingresada por defecto...");
          }else{
            console.log("variable ["+id+"] no ingresada...");
          }
      }else if (this.tipo==Type.STRING){
          const condicion = env.guardar_variable(id, '', this.tipo);
          if (condicion){
            console.log("variable ["+id+"] ingresada por defecto...");
          }else{
            console.log("variable ["+id+"] no ingresada...");
          }
      }else{
        console.log("error semantico, declaracion de variable ["+id+"] no correcta");
      }
    }    
    
  }
}