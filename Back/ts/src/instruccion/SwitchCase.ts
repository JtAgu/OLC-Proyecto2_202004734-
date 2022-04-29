import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class SWITCHCASE extends Instruccion {
  constructor(
    public ExpresionC: Expression,
    public ListaIns:Array<Instruccion>|null,
    public PBreak:any|null,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute2(env: Environment) {
  }
  public execute(env: Environment,sn:Singleton):Retorno{
    let result:Retorno={
      value:null,
      type:Type.error
    }
    if(this.ListaIns!=null){
        for(const x of this.ListaIns){
            x.execute(env,sn);
        }
    }
    if(this.PBreak!=null){
      result={
        value:null,
        type:Type.BREAK
      }
        return result;
    }

    return result
  }
  public ast(s:Singleton) {
    
    const name_node = `node_${this.line}_${this.column}_`
    s.add_ast(`
    ${name_node}[label="\\<Instruccion\\>\\nCase"];
    ${name_node}1[label="\\<Condicion\\>"];
    ${name_node}->${name_node}1;
    ${name_node}1->${this.ExpresionC.ast(s)}        
    `)
    if(this.ListaIns!=null){
        for(const x of this.ListaIns){
            s.add_ast(`
            ${name_node}->node_${x.line}_${x.column}_;        
            `)
            x.ast(s)
        }
    }
}
}
