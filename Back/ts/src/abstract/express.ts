import { Retorno } from "./Retorno"
import { Environment } from "../simbolos/Environment"
import { Singleton } from "../patrondiseno/singleton"

export abstract class Expression {

    constructor(public line: number, public column: number) {
        this.line = line
        this.column = column + 1
    }

    public abstract execute(environment: Environment,sn:Singleton): Retorno
    
}