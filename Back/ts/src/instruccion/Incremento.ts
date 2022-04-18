import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class Incremento extends Instruccion {
  constructor(
    public nombre: string,
    public dim1: Expression|null,
    public dim2: Expression|null,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment) {
    if(env.buscar_variable(this.nombre)){

      if(this.dim2!=null&&this.dim1!=null){
        let exp1=this.dim1.execute(env)
        let exp2=this.dim2.execute(env)
        
        if ((Type.NUMBER== env.getTipo_variable(this.nombre)||Type.DECIMAL== env.getTipo_variable(this.nombre))&&exp1.type==Type.NUMBER&&exp2.type==Type.NUMBER){
          env.actualizar_Matriz(this.nombre, Number(env.getValue_Matriz(this.nombre,exp1.value,exp2.value))+1,exp1.value,exp2.value)
          console.log("variable ["+this.nombre+"] actualizada con exito...");
        }else{
          console.log("error semantico, no se puede asignar un valor de otro tipo a la variable ["+this.nombre+"]");
        }
      }else if(this.dim1!=null&&this.dim2==null){
        let exp1=this.dim1.execute(env)
        if ((Type.NUMBER== env.getTipo_variable(this.nombre)||Type.DECIMAL== env.getTipo_variable(this.nombre))&&exp1.type==Type.NUMBER){
          env.actualizar_Vector(this.nombre, Number(env.getValue_Vector(this.nombre,exp1.value))+1,exp1.value)
          console.log("variable ["+this.nombre+"] actualizada con exito...");
        }else{
          console.log("error semantico, no se puede asignar un valor de otro tipo a la variable ["+this.nombre+"]");
        }
      }else{
        if (Type.NUMBER== env.getTipo_variable(this.nombre)||Type.DECIMAL== env.getTipo_variable(this.nombre)){
          env.actualizar_variable(this.nombre, Number(env.getValue_variable(this.nombre))+1)
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