import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
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
  public execute2(env: Environment) {
  }
  public execute(env: Environment,sn:Singleton) {
    if(this.ListaCase!=null){
        const envSw = new Environment(env);
        let expN=this.Expresion.execute(env,sn);
        let br=false;
        for(const x of this.ListaCase){
            let exp=x.ExpresionC.execute(env,sn);
                if(exp.type==expN.type&&exp.value==expN.value){
                    var corte:Retorno=x.execute(envSw,sn);
                    expN=this.Expresion.execute(env,sn);
                    if(corte.type==Type.BREAK){
                      br=true;
                      break;
                  }
                }
            
        }
        if(!br){
            if(this.Default!=null){
                for(const x of this.Default){
                    x.execute(envSw,sn)
                }
            }
            
        }
    }
  }

}
