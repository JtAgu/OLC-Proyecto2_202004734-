import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class RETURN extends Instruccion {
    constructor(        
        public expresion: Expression,
        line: number,
        column: number
    ) {
        super(line, column);
    }
    public execute2(env: Environment) {
    }
    public execute(env: Environment,sn:Singleton):Retorno {
        let val={
            value:null,
            type:Type.VOID
        }
        if(this.expresion!=null){
            let exp=this.expresion.execute(env,sn);
            //console.log("Return",exp);
            val={
                value:exp.value,
                type:exp.type
            }
            return val;
        }

        return val;
        
    }

    public ast(s:Singleton) {
        
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nreturn"];
        `)
        if(this.expresion!=null){

            s.add_ast(`
            ${name_node}->${name_node}1;
            ${name_node}1[label="\\<EXPRESION\\>"];
            ${name_node}1->${this.expresion.ast(s)}
            `);
        }
    }
}