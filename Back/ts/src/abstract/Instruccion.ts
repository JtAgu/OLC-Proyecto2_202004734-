import { Singleton } from "../patrondiseno/singleton"
import { Environment } from "../simbolos/Environment"

export abstract class Instruccion{
    
    constructor(public line:number,public column:number){
        this.line=line
        this.column=column
    }
    
    public abstract execute(env:Environment,sn:Singleton):any
    public abstract execute2(env:Environment,sn:Singleton):any
}