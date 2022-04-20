import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/Retorno"
import { LENGTH } from "../instruccion/Length"
import { Environment } from "../simbolos/Environment"
import { Type } from "../simbolos/Type"
import { Literal } from "./literal"

export class GetId2 extends Expression {

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
            }else if(env.getDimension_variable(this.IdName)==2){
                
                result={
                    value:env.getDim1_Vector(this.IdName),
                    type:Type.ID
                }
            }else{
                var d1=env.getDim1_Matriz(this.IdName);
                var d2=env.getDim2_Matriz(this.IdName);
                var d:Number=Number(d1)*Number(d2);
                result={
                    value:d,
                    type:Type.ID
                }
            }
        }else{
            console.log("la variable ["+this.IdName+"] no fue encontrada...");
        }
        return result;
    }


}