import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Decremento } from "./decremento";
import { Error } from "./Error";
import { Incremento } from "./Incremento";

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
    public execute2(env: Environment) {
    }
    public execute(env: Environment,sn:Singleton) {
        const envFor = new Environment(env,"AMBIENTE FOR");
        this.Param1.execute(envFor,sn);
        let exp = this.expresionB.execute(envFor,sn);
        var envFor2 = new Environment(envFor,"AMBIENTE FOR");
        if (exp.type == Type.BOOLEAN) {

            while (Boolean(exp.value)) {
                envFor2 = new Environment(envFor,"AMBIENTE FOR");
                var breakOp = false
                if (this.Intrucciones != null) {
                    for (const x of this.Intrucciones) {
                        var corte: Retorno = x.execute(envFor2,sn);
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
                    if (breakOp) {
                        breakOp = false;
                        break;
                    }
                }
                this.Param2.execute(envFor,sn);
                exp = this.expresionB.execute(envFor,sn);
            }
            sn.addEnv(envFor);
            sn.addEnv(envFor2);
        }else{
            sn.addError(new Error(" Condicion de for debe ser boolean", "SEMANTICO", this.line, this.column));
        }


    }

    public ast(s:Singleton) {
        
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nFOR"];
        ${name_node}1[label="\\<Asignacion\\>"];
        ${name_node}2[label="\\<Condicion\\>"];
        ${name_node}3[label="\\<Actualizacion\\>"];
        ${name_node}->${name_node}1;
        ${name_node}->${name_node}2;
        ${name_node}->${name_node}3;
        ${name_node}1->${this.Param1.ast(s)}        
        ${name_node}2->${this.expresionB.ast(s)}        
        ${name_node}3->${this.Param2.ast(s)}        
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
