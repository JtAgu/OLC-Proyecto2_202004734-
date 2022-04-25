import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/Retorno"
import { Error } from "../instruccion/Error"
import { Singleton } from "../patrondiseno/singleton"
import { Environment } from "../simbolos/Environment"
import { Type } from "../simbolos/Type"
import { LogicOption } from "./logicOption"

export class logic extends Expression {

    constructor(
        private left: Expression,
        private right: Expression,
        private type: LogicOption,
        line: number,
        column: number) {
        super(line, column)
    }

    public execute(env: Environment,sn:Singleton): Retorno {

        let result: Retorno ={
            value:null,
            type:Type.error
        }
        const nodoIzq = this.left.execute(env,sn)
        const nodoDer = this.right.execute(env,sn)
        

        if (this.type == LogicOption.NOT) {
            if(Boolean(nodoDer.value)){
                result={
                    value:Boolean(false),
                    type: Type.BOOLEAN
                }
            }else{
                result={
                    value:Boolean(true),
                    type: Type.BOOLEAN
                }
                    sn.addError(new Error("Valores incorrectos para NOT","SEMANTICO",this.line,this.column));
                    console.log("error semantico, valores incorrectos para ["+this.type+"]");
            }
            
        }else if (this.type == LogicOption.AND) {

            if(Boolean(nodoIzq.value)&&Boolean(nodoDer.value)){
                result={
                    value:Boolean(true),
                    type: Type.BOOLEAN
                }
            }else{
                result={
                    value:Boolean(false),
                    type: Type.BOOLEAN
                }
                sn.addError(new Error("Valores incorrectos para AND","SEMANTICO",this.line,this.column));
                    console.log("error semantico, valores incorrectos para ["+this.type+"]");
            }
            
        }else if (this.type == LogicOption.OR) {
            if(Boolean(nodoIzq.value)||Boolean(nodoDer.value)){
                result={
                    value:Boolean(true),
                    type: Type.BOOLEAN
                }
            }else{
                result={
                    value:Boolean(false),
                    type: Type.BOOLEAN
                }
                sn.addError(new Error("Valores incorrectos para OR","SEMANTICO",this.line,this.column));
                    console.log("error semantico, valores incorrectos para ["+this.type+"]");
            }
            
        }
        return result
    }
}