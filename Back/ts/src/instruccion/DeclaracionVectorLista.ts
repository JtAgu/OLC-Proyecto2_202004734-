import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class DeclaracionVectorLista extends Instruccion {
  constructor(
    public nombre: string,
    public tipo: Type,
    public valores: Array<Expression> | null,
    public valorS: Expression|null,
    line: number,
    column: number
  ) {
    super(line, column);
  }


  public execute2(env: Environment) {
  }


  public execute(env: Environment,sn:Singleton) {

    let Concordancia = true;
    if (this.valores != null) {
      let val: Array<any> = [];
      for (const x of this.valores) {
        let exp = x.execute(env,sn);
        if (exp.type == this.tipo) {
          val.push(exp.value);
        } else {
          console.log("error semantico, declaracion de variable [" + this.nombre + "] no correcta");
          Concordancia = false;
          break;
        }
      }
      if (Concordancia) {
        const condicion = env.guardar_Vector(this.nombre, val, this.tipo, val.length);
        if (condicion) {
          console.log("variable [" + this.nombre + "] ingresada...");
        } else {
          console.log("variable [" + this.nombre + "] no ingresada...");
        }
      }
    }else{
      let val: Array<any> = [];
      let exp=this.valorS?.execute(env,sn);
      if(exp?.type==Type.STRING){
        for(const s of exp.value){
          val.push(s);
        }
        const condicion = env.guardar_Vector(this.nombre, val, this.tipo, val.length);
        if (condicion) {
          console.log("variable [" + this.nombre + "] ingresada...");
        } else {
          console.log("variable [" + this.nombre + "] no ingresada...");
        }
      }
    }

  }
}