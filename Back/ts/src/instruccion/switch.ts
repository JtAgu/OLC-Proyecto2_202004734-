import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { SWITCHCASE } from "./SwitchCase";

export class SWITCH extends Instruccion {
  constructor(
    public Expresion: Expression,
    public ListaCase:Array<SWITCHCASE>|null,
    public Default:Array<Instruccion>|null,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment) {
    if(this.ListaCase!=null){
        const envSw = new Environment(env);
        let expN=this.Expresion.execute(env);
        let br=false;
        for(const x of this.ListaCase){
            let exp;
            
                exp=x.ExpresionC.execute(env);
                if(exp.type==expN.type&&exp.value==expN.value){
                    br=x.execute(envSw);
                }
                if(br){
                    break;
                }
        }
        if(!br){
            if(this.Default!=null){
                for(const x of this.Default){
                    x.execute(envSw)
                }
            }
            
        }
    }
  }

}
