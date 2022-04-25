import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Error } from "./Error";

export class DeclaracionMatrizLista extends Instruccion {
  constructor(
    public nombre: string,
    public tipo: Type,
    public valores: Array<Array<Expression>>,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute2(env: Environment) {
  }
  public execute(env: Environment, sn: Singleton) {

    let Concordancia = true;
    let val: Array<any> = [];
    var i = 0;
    var j = 0;
    for (const x of this.valores) {
      let val2: Array<any> = [];
      j = 0;
      i++;
      for (const y of x) {
        j++;
        let exp = y.execute(env, sn);
        if (exp.type == this.tipo) {
          val2.push(exp.value);
        } else {
          sn.addError(new Error(" Expresion con tipo diferente a [" + this.nombre + "]", "SEMANTICO", this.line, this.column));
          Concordancia = false;
          break;
        }
      }
      if (!Concordancia) {
        break;
      }
      val.push(val2);
    }

    if (Concordancia) {

      const condicion = env.guardar_Matriz(this.nombre, val, this.tipo, i, j);
      if (condicion) {
        console.log("variable [" + this.nombre + "] ingresada...");
      } else {
        console.log("variable [" + this.nombre + "] no ingresada...");
      }
    } else {
      sn.addError(new Error(" Expresion con tipo diferente a [" + this.nombre + "]", "SEMANTICO", this.line, this.column));
    }
  }
}