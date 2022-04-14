import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";

export class Print extends Instruccion {
  constructor(
    public expresion:Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment) {
    
    let exp= this.expresion.execute(env)
    console.log(exp.value);
    //pueden usar patron singleton para capturar todas las saliddas de consola
    
  }
}