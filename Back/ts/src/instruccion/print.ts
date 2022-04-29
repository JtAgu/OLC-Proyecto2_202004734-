import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";

export class Print extends Instruccion {
  constructor(
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
    //console.log(exp.value);
    sn.addMsg(exp.value)
    //pueden usar patron singleton para capturar todas las saliddas de consola
    //return exp.value
  }
  public ast(s:Singleton) {
    
    const nombreNodo = `node_${this.line}_${this.column}_`
    
    s.add_ast(`
    ${nombreNodo}[label="\\<Instruccion\\>\\nPrint"];
    ${nombreNodo}1[label="\\<VALOR\\>\\n"];
    ${nombreNodo}->${nombreNodo}1
    
    ${nombreNodo}1->${this.expresion.ast(s)}`)

  }
}