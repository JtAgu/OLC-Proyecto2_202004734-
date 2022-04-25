import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Error } from "./Error";

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
  public execute2(env: Environment) {
  }
  public execute(env: Environment,sn:Singleton) {
    
    let exp= this.expresion.execute(env,sn)
    let n= this.expresionN.execute(env,sn)
    let n2= this.expresionN2.execute(env,sn)

    
    if(env.buscar_variable(this.nombre)){
        if(env.getDimension_variable(this.nombre)==3){
    //ahora toca ver que sean del mismo tipo
            if (exp.type== env.getTipo_variable(this.nombre)&&n.type==Type.NUMBER&&n.value<env.getDim1_Vector(this.nombre)&&n2.type==Type.NUMBER&&n2.value<env.getDim1_Vector(this.nombre)){
                env.actualizar_Matriz(this.nombre, exp.value,n.value,n2.value)
                console.log("variable ["+this.nombre+"] actualizada con exito...");
            }else{
              sn.addError(new Error("Asignacion a ["+this.nombre+"] erronea", "SEMANTICO", this.line, this.column));
            }
        }else{
          sn.addError(new Error("Variable ["+this.nombre+"] con dimension distinta", "SEMANTICO", this.line, this.column));
        }
    }else{
      sn.addError(new Error("variable ["+this.nombre+"] no fue encontrada", "SEMANTICO", this.line, this.column));
    }
  }
}