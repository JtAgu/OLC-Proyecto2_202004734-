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

            const condicion = env.guardar_Funcion(this.Nombre,this.line,this.column, this.Typo, this.Intrucciones,this.Parametros);
            if (condicion) {
                console.log("variable [" + this.Nombre + "] ingresada...");
            } else {
                console.log("variable [" + this.Nombre + "] no ingresada...");
            }
        } else {
            const condicion = env.guardar_Funcion(this.Nombre,this.line,this.column, this.Typo, this.Intrucciones,null);
            if (condicion) {
                console.log("variable [" + this.Nombre + "] ingresada...");
            } else {
                console.log("variable [" + this.Nombre + "] no ingresada...");
            }
        }

    }
    public ast(s:Singleton) {
        
        const name_node = `node_${this.line}_${this.column}_`
        s.add_ast(`
        ${name_node}[label="\\<Instruccion\\>\\nFuncion_Metodo"];
        ${name_node}1[label="\\<Nombre\\>"];
        ${name_node}1->${name_node}3; 
        ${name_node}3[label="\\<${this.Nombre}\\>"];
        ${name_node}2[label="\\<Parametros\\>"];
        ${name_node}->${name_node}1;        
        ${name_node}->${name_node}2;
        ${name_node}1->${name_node}3;
        `)
        //console.log(this.Parametros);
        console.log(this.Intrucciones);
        if(this.Parametros!=null){
            for(const x of this.Parametros){
                s.add_ast(`
                ${name_node}2->${x.ast(s)};        
                `)
            }
        }
        if(this.Intrucciones!=null){
            for(const x of this.Intrucciones){
                
                x.ast(s)
                s.add_ast(`
                    ${name_node}->node_${x.line}_${x.column}_;        
                `)
            }
        }
    }
}
