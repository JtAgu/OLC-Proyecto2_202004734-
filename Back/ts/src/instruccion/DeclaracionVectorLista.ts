import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class DeclaracionVectorLista extends Instruccion {
  constructor(
    public nombre: string,
    public tipo: Type,
    public valores:Array<Expression>,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment) {
    
    let Concordancia=true;
    let val:Array<any> = [];
    for(const x of this.valores){
        let exp= x.execute(env);
        if(exp.type==this.tipo){
            val.push(exp.value);
        }else{
            console.log("error semantico, declaracion de variable ["+this.nombre+"] no correcta");
            Concordancia=false;
            break;
        }
    }
    if(Concordancia){
        const condicion = env.guardar_Vector(this.nombre,val, this.tipo,val.length);
        if (condicion){
          console.log("variable ["+this.nombre+"] ingresada...");
        }else{
          console.log("variable ["+this.nombre+"] no ingresada...");
        }
    }
  }
}