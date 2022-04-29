import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Error } from "./Error";

export class AsignacionTernario extends Instruccion {
  constructor(
    public nombre: string,
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

    if(env.buscar_variable(this.nombre)){
      if(env.getDimension_variable(this.nombre)==1){
        //ahora toca ver que sean del mismo tipo
        if (expV.type== env.getTipo_variable(this.nombre)&&expF.type== env.getTipo_variable(this.nombre)){
          if(exp.type==Type.BOOLEAN){
              if(Boolean(exp.value)){
                  env.actualizar_variable(this.nombre, expV.value)
                  console.log("variable ["+this.nombre+"] actualizada con exito...");
              }else{
                  env.actualizar_variable(this.nombre, expF.value)
                  console.log("variable ["+this.nombre+"] actualizada con exito...");
              }
          }        
          
        }else{
          sn.addError(new Error("valor de otro tipo a ["+this.nombre+"]", "SEMANTICO", this.line, this.column));
        }
        
      }else{
        sn.addError(new Error("Variable ["+this.nombre+"] con dimension distinta", "SEMANTICO", this.line, this.column));
        
      }
    }else{
      sn.addError(new Error("variable ["+this.nombre+"] no fue encontrada", "SEMANTICO", this.line, this.column));
    }
    
  }

  public ast(s:Singleton) {
    
    const name_nodo = `node_${this.line}_${this.column}_`
    s.add_ast(`
    ${name_nodo} [label="\\<Instruccion\\>\\n Asignacion ternario"];
    ${name_nodo}1[label="\\<ID\\>\n${name_nodo}"];
    ${name_nodo}2[label="\\<Instruccion verdadera\\>"];
    ${name_nodo}3[label="\\<Instruccion falsa\\>"];
    ${name_nodo}->${name_nodo}1;
    ${name_nodo}->${name_nodo}2;
    ${name_nodo}->${name_nodo}3;
    ${name_nodo}->${this.expresion.ast(s)}
    ${name_nodo}2->node_${this.expresionV.line}_${this.expresionV.column}_;
    ${name_nodo}3->node_${this.expresionF.line}_${this.expresionF.column}_;
    `)
    this.expresionV.ast(s);
    this.expresionF.ast(s);
}
}