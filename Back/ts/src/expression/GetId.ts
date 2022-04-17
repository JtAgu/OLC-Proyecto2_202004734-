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
        if(env.getDimension_variable(this.IdName)==1){
            if(env.buscar_variable(this.IdName)){
                result={
                    value:env.getValue_variable(this.IdName),
                    type:env.getTipo_variable(this.IdName)
                }
            }else{
                console.log("la variable ["+this.IdName+"] no fue encontrada...");
            }
        }else{
            console.log("la variable ["+this.IdName+"] no tiene una dimension diferente...");
        }
        return result;
    }


}