import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";

export class Asignacion extends Instruccion {
  constructor(
    public nombre: string,
    public expresion:Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment) {
    
    let exp= this.expresion.execute(env)

    if(env.getDimension_variable(this.nombre)==1){
      if(env.buscar_variable(this.nombre)){
        //ahora toca ver que sean del mismo tipo
        if (exp.type== env.getTipo_variable(this.nombre)){
          env.actualizar_variable(this.nombre, exp.value)
          console.log("variable ["+this.nombre+"] actualizada con exito...");
          
        }else{
          console.log("error semantico, no se puede asignar un valor de otro tipo a la variable ["+this.nombre+"]");
          
        }
        
      }else{
        console.log("la variable ["+this.nombre+"] no fue encontrada...");
        
      }
    }else{
      console.log("la variable ["+this.nombre+"] tiene una dimension diferente...");
    }
    

  }
}