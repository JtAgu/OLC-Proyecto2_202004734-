import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/Retorno"
import { Environment } from "../simbolos/Environment"
import { Type } from "../simbolos/Type"

export class GetMatriz extends Expression {

    constructor(
        private IdName: any,
        public num:Expression,
        public num2:Expression,
        line: number,
        column: number) {
        super(line, column)
    }

    public execute(env: Environment): Retorno {
        let exp= this.num.execute(env)
        let exp2= this.num2.execute(env)

        let result: Retorno ={
            value:null,
            type:Type.error
        }
        if(env.getDimension_variable(this.IdName)==3){
            if(exp.type==Type.NUMBER&&exp2.type==Type.NUMBER&&exp.value<env.getDim1_Matriz(this.IdName)&&exp2.value<env.getDim2_Matriz(this.IdName)){
                if(env.buscar_variable(this.IdName)){
                    
                    result={
                        value:env.getValue_Matriz(this.IdName,Number(exp.value),Number(exp2.value)),
                        type:env.getTipo_variable(this.IdName)
                    }

                }else{
                    console.log("la variable ["+this.IdName+"] no fue encontrada...");
                }
            }else{
                console.log("el valor de ["+this.IdName+"] no fue solicitado correctamente...");    
            }
            
        }else{
            console.log("la variable ["+this.IdName+"] tiene una dimension diferente...");
        }
        return result;
    }
}