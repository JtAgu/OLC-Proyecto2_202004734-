import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Decremento } from "./decremento";
import { Error } from "./Error";
import { Incremento } from "./Incremento";

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

    public execute(env: Environment, sn: Singleton) {
        let exp = this.expresion.execute(env, sn);
        var envWh = new Environment(env,"AMBIENTE WHILE");
        if (exp.type == Type.BOOLEAN) {
            do {
                var breakOp = false
                if (this.Intrucciones != null) {

                    envWh = new Environment(env,"AMBIENTE WHILE");
                    for (const x of this.Intrucciones) {
                        var corte: Retorno = x.execute(envWh, sn);
                        if (corte != undefined) {
                            if (corte.type == Type.BREAK) {
                                breakOp = true;
                                break;
                            } else if (corte.type == Type.CONTINUE) {
                                break;
                            } else {
                                return corte;
                            }
                        }
                    }
                }
                if (breakOp) {
                    breakOp = false;
                    break;
                }
                exp = this.expresion.execute(env, sn);
            } while (exp.value)
            sn.addEnv(envWh);
        }else{
            sn.addError(new Error(" Condicion de do-While debe ser boolean", "SEMANTICO", this.line, this.column));
        }
    }

    public ast(s:Singleton) {
        
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\ndo while"];
        ${name_node}1[label="\\<Condicion\\>"];
        ${name_node}->${name_node}1;
        ${name_node}1->${this.expresion.ast(s)}        
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
    }
}
