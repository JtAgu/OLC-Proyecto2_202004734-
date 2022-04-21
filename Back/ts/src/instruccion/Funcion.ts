import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Declaracion } from "./Declaracion";

export class Funcion extends Instruccion {
    constructor(
        public Nombre: any,
        public Parametros: Array<Declaracion> | null,
        public Intrucciones: Array<Instruccion>,
        public Typo: Type,
        line: number,
        column: number
    ) {
        super(line, column);
    }
    public execute2(env: Environment) {
    }
    public execute(env: Environment,sn:Singleton) {
        if (this.Parametros != null) {

            const condicion = env.guardar_Funcion(this.Nombre, this.Typo, this.Intrucciones,this.Parametros);
            if (condicion) {
                console.log("variable [" + this.Nombre + "] ingresada...");
            } else {
                console.log("variable [" + this.Nombre + "] no ingresada...");
            }
        } else {
            const condicion = env.guardar_Funcion(this.Nombre, this.Typo, this.Intrucciones,null);
            if (condicion) {
                console.log("variable [" + this.Nombre + "] ingresada...");
            } else {
                console.log("variable [" + this.Nombre + "] no ingresada...");
            }
        }

    }
}
