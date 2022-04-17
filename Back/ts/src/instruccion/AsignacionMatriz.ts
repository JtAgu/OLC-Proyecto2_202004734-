import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class AsignacionMatriz extends Instruccion {
  constructor(
    public nombre: string,
    public expresionN:Expression,
    public expresionN2:Expression,
    public expresion:Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment) {
    
    let exp= this.expresion.execute(env)
    let n= this.expresionN.execute(env)
    let n2= this.expresionN2.execute(env)

    
    if(env.buscar_variable(this.nombre)){
        if(env.getDimension_variable(this.nombre)==3){
    //ahora toca ver que sean del mismo tipo
            if (exp.type== env.getTipo_variable(this.nombre)&&n.type==Type.NUMBER&&n.value<env.getDim1_Vector(this.nombre)&&n2.type==Type.NUMBER&&n2.value<env.getDim1_Vector(this.nombre)){
                env.actualizar_Matriz(this.nombre, exp.value,n.value,n2.value)
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