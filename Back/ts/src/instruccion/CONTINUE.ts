import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { digraph, toDot } from 'ts-graphviz';

export class CONTINUE extends Instruccion {
    constructor(        
        line: number,
        column: number
    ) {
        super(line, column);
    }
    public execute2(env: Environment) {
    }
    public execute(env: Environment,sn:Singleton):Retorno {
        let val={
            value:true,
            type:Type.CONTINUE
        }
        return val;
    }
    public ast(s:Singleton) {
        
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nContinue"];
        `)
    }
}