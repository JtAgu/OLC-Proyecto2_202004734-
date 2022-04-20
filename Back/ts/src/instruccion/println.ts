import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";

export class PrintLn extends Instruccion {
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
    return exp.value+"\n"
  }
}