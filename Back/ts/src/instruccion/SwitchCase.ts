import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
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

  public execute(env: Environment):boolean{
    if(this.ListaIns!=null){
        for(const x of this.ListaIns){
            x.execute(env);
        }
    }
    if(this.PBreak!=null){
        return true;
    }

    return false
  }
}
