import { Retorno } from "./Retorno"
import { Environment } from "../simbolos/Environment"

export abstract class Expression {

    constructor(public line: number, public column: number) {
        this.line = line
        this.column = column + 1
    }

    public abstract execute(environment: Environment): Retorno
    
}