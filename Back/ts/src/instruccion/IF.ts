import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Decremento } from "./decremento";
import { Error } from "./Error";
import { Incremento } from "./Incremento";

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
            const envIf = new Environment(env,"AMBIENTE IF");
            if( Boolean(exp.value)==Boolean(true)){

                
                if(this.Intrucciones!=null){
                    
                    for(const x of this.Intrucciones){
                        var corte = x.execute(envIf,sn);
                        
                        if(corte!=undefined&&corte.type!=Type.VOID){
                            
                            return corte
                        }
                    }
                }
                sn.addEnv(envIf);
            }else{
                if(this.SigIf!=null){
                    var corte = this.SigIf.execute(envIf,sn);
                        
                        if(corte!=undefined&&corte.type!=Type.VOID){
                            
                            return corte
                        }
                }
            }
        }else{
            sn.addError(new Error(" Condicion de IF debe ser boolean", "SEMANTICO", this.line, this.column));
        }
    }

    public ast(s:Singleton) {
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nif"];
        ${name_node}1[label="\\<True\\>"];
        ${name_node}2[label="\\<Else\\>"];
        ${name_node}->${name_node}1;
        ${name_node}->${name_node}2;
        `)
        if(this.Intrucciones!=null){
            for(const x of this.Intrucciones){
                s.add_ast(`
                ${name_node}->node_${x.line}_${x.column}_;        
                `)
                var t=x.ast(s)
            if(x instanceof Incremento||x instanceof Decremento){
                s.add_ast(t+"");
            }
            }
        }
        
        if (this.SigIf != null) {
            s.add_ast(`${name_node}2->node_${this.SigIf.line}_${this.SigIf.column}_`)
            this.SigIf.ast(s)
        }
    }
}