import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Error } from "./Error";

export class DeclaracionTernario extends Instruccion {
  constructor(
    public nombre: string,
    public tipo: Type,
    public expresion:Expression,
    public expresionV:Expression,
    public expresionF:Expression,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute2(env: Environment) {
  }
  public execute(env: Environment,sn:Singleton) {
    
    let exp= this.expresion.execute(env,sn)
    let expV= this.expresionV.execute(env,sn)
    let expF= this.expresionF.execute(env,sn)
    
    
    if (expV.type == this.tipo&&expF.type == this.tipo){
      if(exp.type==Type.BOOLEAN){
        if(Boolean(exp.value)){
          const condicion = env.guardar_variable(this.nombre,this.line,this.column, expV, this.tipo);
          if (condicion){
            console.log("variable ["+this.nombre+"] ingresada...");
          }else{
            console.log("variable ["+this.nombre+"] no ingresada...");
          }
        }else{
          const condicion = env.guardar_variable(this.nombre,this.line,this.column, expF, this.tipo);
          if (condicion){
            console.log("variable ["+this.nombre+"] ingresada...");
          }else{
            console.log("variable ["+this.nombre+"] no ingresada...");
          }
        }
      }else{
        sn.addError(new Error("Declaracion de ["+this.nombre+"] incorrecta", "SEMANTICO", this.line, this.column));
      } 
    }else{
      sn.addError(new Error("Variable ["+this.nombre+"] con tipo distinto", "SEMANTICO", this.line, this.column));
    } 
  }

  public ast(s:Singleton) {
    
    const name_nodo = `node_${this.line}_${this.column}_`
    s.add_ast(`
    ${name_nodo} [label="\\<Instruccion\\>\\n Declaracion ternario"];
    ${name_nodo}1[label="\\<ID\\>\n${this.nombre}"];
    ${name_nodo}2[label="\\<Tipo\\>\n${this.tipo}"];
    ${name_nodo}3[label="\\<Instruccion verdadera\\>"];
    ${name_nodo}4[label="\\<Instruccion falsa\\>"];
    ${name_nodo}->${name_nodo}1;
    ${name_nodo}->${name_nodo}2;
    ${name_nodo}->${name_nodo}3;
    ${name_nodo}->${name_nodo}4;
    ${name_nodo}->${this.expresion.ast(s)}
    ${name_nodo}3->node_${this.expresionV.line}_${this.expresionV.column}_;
    ${name_nodo}4->node_${this.expresionF.line}_${this.expresionF.column}_;
    `)
    this.expresionV.ast(s);
    this.expresionF.ast(s);
}
}