import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class IF extends Instruccion {
  constructor(
    public expresion: Expression,
    public Intrucciones:Array<Instruccion>|null,
    public SigIf:Instruccion|null,
    line: number,
    column: number
  ) {
    super(line, column);
  }

    public execute(env: Environment) {
        let exp=this.expresion.execute(env);
        if(exp.type==Type.BOOLEAN){
            if( Boolean(exp.value)==Boolean(true)){
                if(this.Intrucciones!=null){
                    const envIf = new Environment(env);
                    for(const x of this.Intrucciones){
                        var x2 = x.execute(envIf);
                        if(x2!=undefined){
                            if(x2){
                                return true;
                            }else{
                                return false;
                            }
                        }
                    }
                }
            }else{
                if(this.SigIf!=null){
                    this.SigIf.execute(env);
                }
            }
        }   
    }
}