import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class DOWHILE extends Instruccion {
    constructor(        
        public Intrucciones: Array<Instruccion> | null,
        public expresion: Expression,
        line: number,
        column: number
    ) {
        super(line, column);
    }
    public execute2(env: Environment) {
    }

    public execute(env: Environment,sn:Singleton) {
        let exp = this.expresion.execute(env,sn);
        if (exp.type == Type.BOOLEAN) {
            do {
                var breakOp=false
                if (this.Intrucciones != null) {
                    
                    const envWh = new Environment(env);
                    for (const x of this.Intrucciones) {
                        var corte:Retorno =x.execute(envWh,sn);
                        if(corte!=undefined){
                            if(corte.type==Type.BREAK){
                                breakOp=true;
                                break;
                            }else if(corte.type==Type.CONTINUE){
                                break;
                            }else {
                                return corte;
                            }
                        }
                    }
                }
                if(breakOp){
                    breakOp=false;
                    break;
                }
                exp = this.expresion.execute(env,sn);
            }while (exp.value)
            
        }
    }
}
