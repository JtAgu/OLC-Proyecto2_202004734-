
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class Incremento extends Instruccion {
  constructor(
    public nombre: string,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment) {
    
    if(env.buscar_variable(this.nombre)){
      //ahora toca ver que sean del mismo tipo
      
      if (Type.NUMBER== env.getTipo_variable(this.nombre)||Type.DECIMAL== env.getTipo_variable(this.nombre)){
        env.actualizar_variable(this.nombre, Number(env.getValue_variable(this.nombre))+1)

        console.log("variable ["+this.nombre+"] actualizada con exito...");
      }else{
        console.log("error semantico, no se puede asignar un valor de otro tipo a la variable ["+this.nombre+"]");
      }
      
    }
    else{
      console.log("la variable ["+this.nombre+"] no fue encontrada...");
      
    }
  }
}