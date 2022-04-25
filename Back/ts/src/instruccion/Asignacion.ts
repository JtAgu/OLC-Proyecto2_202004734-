import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Error } from "./Error";

export class Asignacion extends Instruccion {
  constructor(
    public nombre: string,
    public expresion:Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute2(env: Environment) {
  }
  public execute(env: Environment,sn:Singleton) {
    
    let exp= this.expresion.execute(env,sn)

    if(env.buscar_variable(this.nombre)){
      if(env.getDimension_variable(this.nombre)==1){
        //ahora toca ver que sean del mismo tipo
        if (exp.type== env.getTipo_variable(this.nombre)){
          env.actualizar_variable(this.nombre, exp.value)
          console.log("variable ["+this.nombre+"] actualizada con exito...");
          
        }else{
          sn.addError(new Error("Expresion de tipo distinro a  ["+this.nombre+"]", "SEMANTICO", this.line, this.column));
          
        }
        
      }else{
        sn.addError(new Error("Variable ["+this.nombre+"] con dimension distinta", "SEMANTICO", this.line, this.column));
        
      }
    }else{
      sn.addError(new Error("variable ["+this.nombre+"] no fue encontrada", "SEMANTICO", this.line, this.column));
    }
    

  }
}