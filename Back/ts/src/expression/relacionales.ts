import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/Retorno"
import { Error } from "../instruccion/Error"
import { Singleton } from "../patrondiseno/singleton"
import { Environment } from "../simbolos/Environment"
import { Type } from "../simbolos/Type"
import { RelacionalOption,get_simbolo } from "./relacionalOption"

export class relacional extends Expression {

    constructor(
        private left: Expression,
        private right: Expression,
        private type: RelacionalOption,
        line: number,
        column: number) {
        super(line, column)
    }

    public execute(env: Environment, sn: Singleton): Retorno {

        let result: Retorno = {
            value: null,
            type: Type.error
        }
        const nodoIzq = this.left.execute(env, sn)
        const nodoDer = this.right.execute(env, sn)

        //const val:number= nodoIzq.value? 1:0
        if (this.type == RelacionalOption.IGUAL) {
            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER
                || nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DECIMAL
                || nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.DECIMAL && nodoDer.type == Type.NUMBER
                || nodoIzq.type == Type.DECIMAL && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.DECIMAL
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.BOOLEAN && nodoDer.type == Type.BOOLEAN
                || nodoIzq.type == Type.STRING && nodoDer.type == Type.STRING) {
                    console.log(nodoIzq.value,"igual",nodoDer.value);
                if (nodoIzq.value == nodoDer.value) {
                    console.log("Si")
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                    

                }
            }else{
                sn.addError(new Error("Valores incorrectos para 'igual relacional'", "SEMANTICO", this.line, this.column));
            }


        } else if (this.type == RelacionalOption.MENOR) {
            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER
                || nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DECIMAL
                || nodoIzq.type == Type.DECIMAL && nodoDer.type == Type.NUMBER) {
                    console.log(nodoIzq.value,"Menor",nodoDer.value);
                if (nodoIzq.value < nodoDer.value) {
                    console.log("Si")
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.DECIMAL) {
                const val: number = nodoIzq.value.charCodeAt(0);
                if (val < nodoDer.value) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.DECIMAL && nodoDer.type == Type.CHAR) {
                const val: number = nodoDer.value.charCodeAt(0);
                if (nodoIzq.value < val) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.CHAR) {
                const val: number = nodoIzq.value.charCodeAt(0);
                const val2: number = nodoDer.value.charCodeAt(0);
                if (val < val2) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.BOOLEAN && nodoDer.type == Type.BOOLEAN) {
                const val: number = nodoIzq.value ? 1 : 0
                const val2: number = nodoDer.value ? 1 : 0
                if (val < val2) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else {
                sn.addError(new Error("Valores incorrectos para 'menor relacional'", "SEMANTICO", this.line, this.column));
            }




        } else if (this.type == RelacionalOption.MAYOR) {

            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER
                || nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DECIMAL
                || nodoIzq.type == Type.DECIMAL && nodoDer.type == Type.NUMBER) {
                    console.log(nodoIzq.value,"mayor",nodoDer.value);
                if (nodoIzq.value > nodoDer.value) {
                    console.log("Si")
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.DECIMAL) {
                const val: number = nodoIzq.value.charCodeAt(0);
                if (val > nodoDer.value) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.DECIMAL && nodoDer.type == Type.CHAR) {
                const val: number = nodoDer.value.charCodeAt(0);
                if (nodoIzq.value > val) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.CHAR) {
                const val: number = nodoIzq.value.charCodeAt(0);
                const val2: number = nodoDer.value.charCodeAt(0);
                if (val > val2) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.BOOLEAN && nodoDer.type == Type.BOOLEAN) {
                const val: number = nodoIzq.value ? 1 : 0
                const val2: number = nodoDer.value ? 1 : 0
                if (val > val2) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            }else {
                sn.addError(new Error("Valores incorrectos para 'mayor relacional'", "SEMANTICO", this.line, this.column));

            }


        } else if (this.type == RelacionalOption.MENORIGUAL) {
            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER
                || nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DECIMAL
                || nodoIzq.type == Type.DECIMAL && nodoDer.type == Type.NUMBER) {
                if (nodoIzq.value <= nodoDer.value) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.DECIMAL) {
                const val: number = nodoIzq.value.charCodeAt(0);
                if (val <= nodoDer.value) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.DECIMAL && nodoDer.type == Type.CHAR) {
                const val: number = nodoDer.value.charCodeAt(0);
                if (nodoIzq.value <= val) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.CHAR) {
                const val: number = nodoIzq.value.charCodeAt(0);
                const val2: number = nodoDer.value.charCodeAt(0);
                if (val <= val2) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.BOOLEAN && nodoDer.type == Type.BOOLEAN) {
                const val: number = nodoIzq.value ? 1 : 0
                const val2: number = nodoDer.value ? 1 : 0
                if (val <= val2) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            }else {
                sn.addError(new Error("Valores incorrectos para 'menor igual relacional'", "SEMANTICO", this.line, this.column));

            }



        } else if (this.type == RelacionalOption.MAYORIGUAL) {


            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER
                || nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DECIMAL
                || nodoIzq.type == Type.DECIMAL && nodoDer.type == Type.NUMBER) {
                if (nodoIzq.value >= nodoDer.value) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.DECIMAL) {
                const val: number = nodoIzq.value.charCodeAt(0);
                if (val >= nodoDer.value) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.DECIMAL && nodoDer.type == Type.CHAR) {
                const val: number = nodoDer.value.charCodeAt(0);
                if (nodoIzq.value >= val) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            }
            else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.CHAR) {
                const val: number = nodoIzq.value.charCodeAt(0);
                const val2: number = nodoDer.value.charCodeAt(0);
                if (val >= val2) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            } else if (nodoIzq.type == Type.BOOLEAN && nodoDer.type == Type.BOOLEAN) {
                const val: number = nodoIzq.value ? 1 : 0
                const val2: number = nodoDer.value ? 1 : 0
                if (val >= val2) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            }else {
                sn.addError(new Error("Valores incorrectos para 'mayor igual relacional'", "SEMANTICO", this.line, this.column));

            }

        } else if (this.type == RelacionalOption.DIFERENTE) {

            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER
                || nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DECIMAL
                || nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.DECIMAL && nodoDer.type == Type.NUMBER
                || nodoIzq.type == Type.DECIMAL && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.DECIMAL
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.BOOLEAN && nodoDer.type == Type.BOOLEAN
                || nodoIzq.type == Type.STRING && nodoDer.type == Type.STRING) {
                if (nodoIzq.value != nodoDer.value) {
                    result = {
                        value: Boolean(true),
                        type: Type.BOOLEAN
                    }
                } else {
                    result = {
                        value: Boolean(false),
                        type: Type.BOOLEAN
                    }
                }
            }else{
                sn.addError(new Error("Valores incorrectos para 'diferente relacional'","SEMANTICO",this.line,this.column));           
            }
        } else {
            console.error('error');
        }
        return result
    }

    public ast(salida:Singleton) {
        const nombreNodo = `node_${this.line}_${this.column}_`
        return `
        ${nombreNodo};
        ${nombreNodo}[label="${get_simbolo(this.type)}"];
        ${nombreNodo}->${this.left.ast(salida)}
        ${nombreNodo}->${this.right.ast(salida)}
        `
    }
}