import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/Retorno"
import { Environment } from "../simbolos/Environment"
import { Type } from "../simbolos/Type"

export class GetVector extends Expression {

    constructor(
        private IdName: any,
        public num:Expression,
        line: number,
        column: number) {
        super(line, column)
    }

    public execute(env: Environment): Retorno {
        let exp= this.num.execute(env)

        let result: Retorno ={
            value:null,
            type:Type.error
        }
        if(env.getDimension_variable(this.IdName)==2){
            if(exp.type==Type.NUMBER&&exp.value<env.getDim1_Vector(this.IdName)){
                if(env.buscar_variable(this.IdName)){
                    
                    result={
                        value:env.getValue_Vector(this.IdName,Number(exp.value)),
                        type:env.getTipo_variable(this.IdName)
                    }

                }else{
                    console.log("la variable ["+this.IdName+"] no fue encontrada...");
                }
            }else{
                console.log("el valor de ["+this.IdName+"] no fue solicitado correctamente...");    
            }
            
        }else{
            console.log("la variable ["+this.IdName+"] no tiene una dimension diferente...");
        }
        return result;
    }
}