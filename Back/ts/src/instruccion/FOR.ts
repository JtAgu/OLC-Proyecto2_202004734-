import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class FOR extends Instruccion {
    constructor(        
        public Param1: Instruccion,
        public expresionB: Expression,
        public Param2: Instruccion,
        public Intrucciones: Array<Instruccion> | null,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public execute(env: Environment) {
        const envFor = new Environment(env);
        this.Param1.execute(envFor);
        let exp=this.expresionB.execute(envFor);
        if(exp.type==Type.BOOLEAN){
            while(Boolean(exp.value)){
                var breakOp=false
                if(this.Intrucciones!=null){
                    for (const x of this.Intrucciones) {
                        var x2 =x.execute(envFor);
                        if(x2!=undefined){
                            if(x2){
                                breakOp=true;
                                break;
                            }else{
                                break;
                            }
                        }
                    }
                    if(breakOp){
                        breakOp=false;
                        break;
                    }
                }
                this.Param2.execute(envFor);
                exp=this.expresionB.execute(envFor);
            }
        }
        

    }
}
