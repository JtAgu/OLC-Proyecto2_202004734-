import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Error } from "./Error";

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
  public execute2(env: Environment) {
}
    public execute(env: Environment,sn:Singleton) {
        let exp=this.expresion.execute(env,sn);
        if(exp.type==Type.BOOLEAN){
            if( Boolean(exp.value)==Boolean(true)){
                if(this.Intrucciones!=null){
                    const envIf = new Environment(env);
                    for(const x of this.Intrucciones){
                        var corte = x.execute(envIf,sn);
                        if(corte!=undefined){
                            return corte
                        }
                    }
                }
            }else{
                if(this.SigIf!=null){
                    this.SigIf.execute(env,sn);
                }
            }
        }else{
            sn.addError(new Error(" Condicion de IF debe ser boolean", "SEMANTICO", this.line, this.column));
        }
    }
}