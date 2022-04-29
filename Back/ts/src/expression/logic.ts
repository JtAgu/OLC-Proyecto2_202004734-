import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/Retorno"
import { Error } from "../instruccion/Error"
import { Singleton } from "../patrondiseno/singleton"
import { Environment } from "../simbolos/Environment"
import { Type } from "../simbolos/Type"
import { LogicOption,get_simbolo } from "./logicOption"

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
            if(nodoDer.type==Type.BOOLEAN){
            
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
                        
                }
            }else{
                sn.addError(new Error("Valores incorrectos para NOT","SEMANTICO",this.line,this.column));
                        console.log("error semantico, valores incorrectos para ["+this.type+"]");
            }
            
            
        }else if (this.type == LogicOption.AND) {
            if(nodoIzq.type==Type.BOOLEAN&&nodoDer.type==Type.BOOLEAN){
                console.log(nodoIzq.value,"And",nodoDer.value);
                if(Boolean(nodoIzq.value)&&Boolean(nodoDer.value)){
                    console.log("Si");
                    result={
                        value:Boolean(true),
                        type: Type.BOOLEAN
                    }
                }else{
                    result={
                        value:Boolean(false),
                        type: Type.BOOLEAN
                    }
                    
                }
            }
            else{
                sn.addError(new Error("Valores incorrectos para AND","SEMANTICO",this.line,this.column));
                console.log("error semantico, valores incorrectos para ["+this.type+"]");
            }
            
        }else if (this.type == LogicOption.OR) {

            if(nodoIzq.type==Type.BOOLEAN&&nodoDer.type==Type.BOOLEAN){
                console.log(nodoIzq.value,"Or",nodoDer.value);
                if(Boolean(nodoIzq.value)||Boolean(nodoDer.value)){
                    
                    console.log("Si");
                    result={
                        value:Boolean(true),
                        type: Type.BOOLEAN
                    }
                }else{
                    result={
                        value:Boolean(false),
                        type: Type.BOOLEAN
                    }
                    
                }
            }else{
                sn.addError(new Error("Valores incorrectos para OR","SEMANTICO",this.line,this.column));
                console.log("error semantico, valores incorrectos para ["+this.type+"]");
            }
            
            
        }
        return result
    }

    public ast(salida:Singleton) {
        const nombreNodo = `node_${this.line}_${this.column}_`
        if(this.type!=LogicOption.NOT){
            return `
        ${nombreNodo};
        ${nombreNodo}[label="${get_simbolo(this.type)}"];
        ${nombreNodo}->${this.left.ast(salida)}
        ${nombreNodo}->${this.right.ast(salida)}
        `
        }
        return `
        ${nombreNodo};
        ${nombreNodo}[label="${get_simbolo(this.type)}"];
        ${nombreNodo}->${this.left.ast(salida)}
        `
    }
}