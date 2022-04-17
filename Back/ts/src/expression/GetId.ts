import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/Retorno"
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

    public execute(env: Environment): Retorno {

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
            }else{
                console.log("la variable ["+this.IdName+"] tiene una dimension diferente...");
            }
        }else{
            console.log("la variable ["+this.IdName+"] no fue encontrada...");
        }
        return result;
    }


}