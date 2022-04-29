import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Error } from "./Error";

export class Casteo extends Instruccion {
  constructor(
    public nombre: string,
    public tipo: Type,
    public expresion:Expression,
    public TipoCambio: Type,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute2(env: Environment) {
}
  public execute(env: Environment,sn:Singleton) {
    let Aceptado=false;
    let exp= this.expresion.execute(env,sn)
    
    
    if(exp.type==Type.NUMBER && this.TipoCambio==Type.DECIMAL){
        exp.type=this.TipoCambio;
        Aceptado=true;
    }else if(exp.type==Type.DECIMAL && this.TipoCambio==Type.NUMBER){
        exp.type=this.TipoCambio;
        exp.value=exp.value.toFixed(0)
        Aceptado=true;
    }else if(exp.type==Type.NUMBER && this.TipoCambio==Type.STRING){
        exp.type=this.TipoCambio;
        Aceptado=true;
    }else if(exp.type==Type.NUMBER && this.TipoCambio==Type.CHAR){
        exp.type=this.TipoCambio;
        exp.value=String.fromCharCode(Number(exp.value));
        Aceptado=true;
    }else if(exp.type==Type.DECIMAL && this.TipoCambio==Type.STRING){
        exp.type=this.TipoCambio;
        Aceptado=true;
    }else if(exp.type==Type.CHAR && this.TipoCambio==Type.NUMBER){
        exp.type=this.TipoCambio;
        exp.value=exp.value.charCodeAt(0);
        Aceptado=true;
    }else if(exp.type==Type.CHAR && this.TipoCambio==Type.DECIMAL){
        exp.type=this.TipoCambio;
        exp.value=exp.value.charCodeAt(0);
        Aceptado=true;
    }
        if(Aceptado){
            if (exp.type == this.tipo){
                console.log(exp.type);
                const condicion = env.guardar_variable(this.nombre,this.line,this.column, exp.value, this.tipo);
                if (condicion){
                    console.log("variable ["+this.nombre+"] ingresada...");
                }else{
                    console.log("variable ["+this.nombre+"] no ingresada...");
                }
            }else{

                sn.addError(new Error(" Expresion con tipo diferente a ["+this.nombre+"]", "SEMANTICO", this.line, this.column));
            }
        }else{
            sn.addError(new Error("casteo no permitido", "SEMANTICO", this.line, this.column));
        }
    }
    public ast(s:Singleton) {

        
        const nombre_nodo =`node_${this.line}_${this.column}_`
        s.add_ast(`
        ${nombre_nodo}[label="\\<Instruccion\\>\\Declaracion_Casteo"];
        ${nombre_nodo}1[label="\\<Tipo\\>\\n${this.tipo}"];
        ${nombre_nodo}2[label="\\<ID\\>\\n${this.nombre}"];
        ${nombre_nodo}3[label="\\<Cambio\\>\\n${this.TipoCambio}"];
        ${nombre_nodo}->${nombre_nodo}1;
        ${nombre_nodo}->${nombre_nodo}2;
        ${nombre_nodo}->${nombre_nodo}3;
        ${nombre_nodo}->${this.expresion.ast(s)}
        `)
    
    }
}