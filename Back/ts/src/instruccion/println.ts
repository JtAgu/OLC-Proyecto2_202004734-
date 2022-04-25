import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { digraph, DotObject, toDot } from 'ts-graphviz';

export class PrintLn extends Instruccion {
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
    sn.addMsg(exp.value+'\n');
    
    //return exp.value+"\n"
  }

  public getNode(env: Environment,sn:Singleton){
    var idnodo=this.line+this.column;
    const g = digraph('G');
    const clave = g.createNode('INSTRUCCION_PRINTLN');
    const println = g.createNode('println');
    const ParA = g.createNode('(');
    const ParC = g.createNode(')');
    const PyC = g.createNode(';');
    
  }
}