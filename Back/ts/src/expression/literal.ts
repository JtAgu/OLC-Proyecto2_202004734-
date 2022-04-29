import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/Retorno"
import { Type } from "../simbolos/Type"
import { Environment } from "../simbolos/Environment";
import { Digraph } from "ts-graphviz";
import { Singleton } from "../patrondiseno/singleton";


export class Literal extends Expression {

    constructor(
        private value: any,
        private type: Type,
        line: number,
        column: number
    ) { 
        super(line, column)
    }

    public execute(): Retorno {
        

        if (this.type == Type.NUMBER)
            return { value: Number(this.value), type: Type.NUMBER 
        }
        else if (this.type == Type.STRING){
            this.value = (this.value).replaceAll("\"","")
            return { value: this.value, type: Type.STRING }
        }
        else if (this.type == Type.BOOLEAN) {
            if (this.value == "true") return { value: Boolean(true), type: Type.BOOLEAN }
            else return { value: Boolean(false), type: Type.BOOLEAN }
        }
        else if (this.type == Type.DECIMAL) {
            return { value: Number(this.value), type: Type.DECIMAL }
        }
        else if (this.type == Type.CHAR) {
            this.value = (this.value).replaceAll("\'","")
            return { value: this.value, type: Type.CHAR }
        }
        else return { value: this.value, type: Type.error }

    }

    public ast(salida:Singleton) {

        const nombre = `node_${this.line}_${this.column}_`
        if(this.type==Type.STRING) return `
        ${nombre};
        ${nombre}[label="${this.value.toString().replaceAll("\"","")}"];`
 
        else return `
        ${nombre};
        ${nombre}[label="${this.value.toString().replaceAll("\'","")}"];`

    }



}