import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class AsignacionVector extends Instruccion {
  constructor(
    public nombre: string,
    public expresionN:Expression,
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
    let n= this.expresionN.execute(env,sn)

    
      if(env.buscar_variable(this.nombre)){
        if(env.getDimension_variable(this.nombre)==2){
        //ahora toca ver que sean del mismo tipo
        if (exp.type== env.getTipo_variable(this.nombre)&&n.type==Type.NUMBER&&n.value<env.getDim1_Vector(this.nombre)){
          env.actualizar_Vector(this.nombre, exp.value,n.value)
          console.log("variable ["+this.nombre+"] actualizada con exito...");
          
        }else{
          console.log("error semantico, no se puede asignar un valor de otro tipo a la variable ["+this.nombre+"]");
        }
        
      }else{
        
        console.log("la variable ["+this.nombre+"] tiene una dimension diferente...");  
      }
    }else{
      
      console.log("la variable ["+this.nombre+"] no fue encontrada...");
    }
    

  }
}