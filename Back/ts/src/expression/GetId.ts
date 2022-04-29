import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/Retorno"
import { Error } from "../instruccion/Error"
import { LENGTH } from "../instruccion/Length"
import { Singleton } from "../patrondiseno/singleton"
import { Environment } from "../simbolos/Environment"
import { Type } from "../simbolos/Type"
import { Literal } from "./literal"

export class GetId extends Expression {

    constructor(
        private IdName: any,
        line: number,
        column: number) {
        super(line, column)
    }

    public execute(env: Environment,sn:Singleton): Retorno {

        let result: Retorno ={
            value:null,
            type:Type.error
        }
        
        if(env.buscar_variable(this.IdName)){
            if(env.getDimension_variable(this.IdName)==1){
            
                result={
                    value:env.getValue_variable(this.IdName),
                    type:env.getTipo_variable(this.IdName)
                }
                return result;
            }else{
                    sn.addError(new Error("la variable ["+this.IdName+"] tiene una dimension diferente...", "SEMANTICO", this.line, this.column));
                //console.log("la variable ["+this.IdName+"] tiene una dimension diferente...");
            }
        }else{
            sn.addError(new Error("la variable ["+this.IdName+"] no fue encontrada...", "SEMANTICO", this.line, this.column));
        }
        return result;
    }

    public ast(salida:Singleton) {

        const name_nodo = `node_${this.line}_${this.column}_`
        return `
        ${name_nodo};
        ${name_nodo}[label="ID_${this.IdName}"];
        `
    }
}