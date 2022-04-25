import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/Retorno"
import { Error } from "../instruccion/Error"
import { Singleton } from "../patrondiseno/singleton"
import { Environment } from "../simbolos/Environment"
import { Type } from "../simbolos/Type"

export class GetVector extends Expression {

    constructor(
        private IdName: any,
        public num: Expression,
        line: number,
        column: number) {
        super(line, column)
    }

    public execute(env: Environment,sn:Singleton): Retorno {
        let exp = this.num.execute(env,sn)

        let result: Retorno = {
            value: null,
            type: Type.error
        }
        if (env.buscar_variable(this.IdName)) {
            if (exp.type == Type.NUMBER && exp.value < env.getDim1_Vector(this.IdName)) {

                if (env.getDimension_variable(this.IdName) == 2) {

                    result = {
                        value: env.getValue_Vector(this.IdName, Number(exp.value)),
                        type: env.getTipo_variable(this.IdName)
                    }

                } else {
                    sn.addError(new Error("la variable ["+this.IdName+"] tiene una dimension diferente...", "SEMANTICO", this.line, this.column));
                }
            } else {
                sn.addError(new Error("la variable ["+this.IdName+"] no se efectuo corrextamente...", "SEMANTICO", this.line, this.column));
            }

        } else {
            sn.addError(new Error("la variable ["+this.IdName+"] no fue encontrada...", "SEMANTICO", this.line, this.column));
        }
        return result;
    }
}