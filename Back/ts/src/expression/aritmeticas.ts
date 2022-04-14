import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/Retorno"
import { Environment } from "../simbolos/Environment"
import { Type } from "../simbolos/Type"
import { ArithmeticOption } from "./aritmeticOption"

export class Arithmetic extends Expression {

    constructor(
        private left: Expression,
        private right: Expression,
        private type: ArithmeticOption,
        line: number,
        column: number) {
        super(line, column)
    }

    public execute(env: Environment): Retorno {

        let result: Retorno ={
            value:null,
            type:Type.error
        }

        const nodoIzq = this.left.execute(env)
        const nodoDer = this.right.execute(env)

        if (this.type == ArithmeticOption.MAS) {

            
            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value+nodoDer.value), 
                    type: Type.NUMBER 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.DECIMAL
                ||nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: ((nodoIzq.value) + (nodoDer.value)), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.CHAR
                ||nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: ((nodoIzq.value) + (nodoDer.value)), 
                    type: Type.NUMBER 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.BOOLEAN) {
                const val:number= nodoIzq.value? 1:0
                result = { 
                    value: (val + (nodoDer.value)), 
                    type: Type.NUMBER 
                }
            }
            else if (nodoDer.type == Type.BOOLEAN && nodoIzq.type == Type.NUMBER) {
                const val:number= nodoDer.value? 1:0
                result = { 
                    value: ((nodoIzq.value) + val), 
                    type: Type.NUMBER 
                }
            }

            else if (nodoIzq.type == Type.STRING ||nodoDer.type == Type.STRING ) {
                result = { 
                    value: (String(nodoIzq.value) + String(nodoDer.value)), 
                    type: Type.STRING 
                }
            }


            else if (nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.DECIMAL) {
                result = { 
                    value: ((nodoIzq.value) + (nodoDer.value)), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.BOOLEAN) {
                const val:number= nodoIzq.value? 1:0
                result = { 
                    value: (val + (nodoDer.value)), 
                    type: Type.DECIMAL 
                }
            }
            else if (nodoDer.type == Type.BOOLEAN && nodoIzq.type == Type.DECIMAL) {
                const val:number= nodoDer.value? 1:0
                result = { 
                    value: ((nodoIzq.value) + val), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.CHAR
                ||nodoDer.type == Type.CHAR && nodoIzq.type == Type.DECIMAL) {
                result = { 
                    value: ((nodoIzq.value) + (nodoDer.value)), 
                    type: Type.NUMBER 
                }
            }

            else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                
                result = { 
                    value: (String(nodoIzq.value) + String(nodoIzq.value)), 
                    type: Type.STRING 
                }
            }
            
            
            //demas validadionces para la operaciones aritmeticas
            
        }else if (this.type == ArithmeticOption.MENOS) {

   
            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value - nodoDer.value), 
                    type: Type.NUMBER 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.DECIMAL
                ||nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value - nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.BOOLEAN) {
                const val:number= nodoIzq.value? 1:0
                result = { 
                    value: (val + (nodoDer.value)), 
                    type: Type.NUMBER 
                }
            }
            else if (nodoDer.type == Type.BOOLEAN && nodoIzq.type == Type.NUMBER) {
                const val:number= nodoDer.value? 1:0
                result = { 
                    value: ((nodoIzq.value) + val), 
                    type: Type.NUMBER 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.CHAR
                ||nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value - nodoDer.value), 
                    type: Type.NUMBER 
                }
            }


            else if (nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.DECIMAL) {
                result = { 
                    value: (nodoIzq.value - nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }
            else if (nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.BOOLEAN) {
                const val:number= nodoIzq.value? 1:0
                result = { 
                    value: (val - nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.BOOLEAN && nodoIzq.type == Type.DECIMAL) {
                const val:number= nodoDer.value? 1:0
                result = { 
                    value: (nodoIzq.value - val), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: (nodoIzq.value - nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.DECIMAL) {
                result = { 
                    value: (nodoIzq.value - nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }

            //en la resta unicamente quiero con numeros
            
        }else if (this.type == ArithmeticOption.MULTIPLICACION) {

   
            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value * nodoDer.value), 
                    type: Type.NUMBER 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.DECIMAL
                ||nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value * nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: (nodoIzq.value * nodoDer.value), 
                    type: Type.NUMBER 
                }
            }else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value * nodoDer.value), 
                    type: Type.NUMBER 
                }
            }else if (nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.DECIMAL) {
                result = { 
                    value: (nodoIzq.value * nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: (nodoIzq.value * nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.DECIMAL) {
                result = { 
                    value: (nodoIzq.value * nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }
            //en la resta unicamente quiero con numeros
            
        }else if (this.type == ArithmeticOption.DIV) {

            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value / nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.DECIMAL
                ||nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value / nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: (nodoIzq.value / nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: (nodoIzq.value / nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.DECIMAL) {
                result = { 
                    value: (nodoIzq.value / nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: (nodoIzq.value / nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.DECIMAL) {
                result = { 
                    value: (nodoIzq.value / nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }
            //en la resta unicamente quiero con numeros
            
        }else if (this.type == ArithmeticOption.POT) {

            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: Math.pow(nodoIzq.value , nodoDer.value), 
                    type: Type.NUMBER 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.DECIMAL
                ||nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: Math.pow(nodoIzq.value , nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.DECIMAL) {
                result = { 
                    value: Math.pow(nodoIzq.value , nodoDer.value), 
                    type: Type.DECIMAL 
                }
            }
            
            //en la resta unicamente quiero con numeros
        }else if (this.type == ArithmeticOption.MODULO) {

            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: nodoIzq.value % nodoDer.value, 
                    type: Type.NUMBER 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.DECIMAL
                ||nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.NUMBER) {
                result = { 
                    value: nodoIzq.value % nodoDer.value, 
                    type: Type.DECIMAL 
                }
            }else if (nodoDer.type == Type.DECIMAL && nodoIzq.type == Type.DECIMAL) {
                result = { 
                    value: nodoIzq.value % nodoDer.value, 
                    type: Type.DECIMAL 
                }
            }  
            //en la resta unicamente quiero con numeros
        }else if (this.type == ArithmeticOption.NEGACION) {

            if (nodoDer.type == Type.NUMBER ) {
                result = { 
                    value: nodoIzq.value *-1, 
                    type: Type.NUMBER 
                }
            }else if (nodoDer.type == Type.DECIMAL) {
                result = { 
                    value: nodoIzq.value *-1, 
                    type: Type.DECIMAL 
                }
            }
            //en la resta unicamente quiero con numeros
        }


        return result
    }


}