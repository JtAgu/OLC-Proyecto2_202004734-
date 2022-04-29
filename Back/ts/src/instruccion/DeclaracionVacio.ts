import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type,getType } from "../simbolos/Type";
import { Error } from "./Error";

export class DeclaracionVacio extends Instruccion {
  constructor(
    public nombre: Array<string>,
    public tipo: Type,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute2(env: Environment) {
  }
  public execute(env: Environment,sn:Singleton) {
    for (const id of this.nombre){

      if (this.tipo==Type.NUMBER){
        const condicion = env.guardar_variable(id,this.line,this.column, Number(0), this.tipo);
        if (condicion){
          console.log("variable ["+id+"] ingresada por defecto...");
        }else{
          console.log("variable ["+id+"] no ingresada...");
        }
      }else if (this.tipo==Type.DECIMAL){
          const condicion = env.guardar_variable(id,this.line,this.column, Number(0.0), this.tipo);
          if (condicion){
            console.log("variable ["+id+"] ingresada por defecto...");
          }else{
            console.log("variable ["+id+"] no ingresada...");
          }
      }else if (this.tipo==Type.CHAR){
          const condicion = env.guardar_variable(id,this.line,this.column, '0' , this.tipo);
          if (condicion){
            console.log("variable ["+id+"] ingresada por defecto...");
          }else{
            console.log("variable ["+id+"] no ingresada...");
          }
      }else if (this.tipo==Type.BOOLEAN){
          const condicion = env.guardar_variable(id,this.line,this.column, Boolean(true), this.tipo);
          if (condicion){
            console.log("variable ["+id+"] ingresada por defecto...");
          }else{
            console.log("variable ["+id+"] no ingresada...");
          }
      }else if (this.tipo==Type.STRING){
          const condicion = env.guardar_variable(id,this.line,this.column, '', this.tipo);
          if (condicion){
            console.log("variable ["+id+"] ingresada por defecto...");
          }else{
            console.log("variable ["+id+"] no ingresada...");
          }
      }else{
        sn.addError(new Error("Declaracion de ["+id+"] incorrecta", "SEMANTICO", this.line, this.column));
      }
    }    
    
  }
  public ast(s:Singleton) {
    
    const nombreNodo = `node_${this.line}_${this.column}_`
    s.add_ast(`
    ${nombreNodo}[label="\\<Instruccion\\>\\nDeclaracion vacio"];
    ${nombreNodo}1[label="\\<Nombre\\>"];`)
    for(const x of this.nombre){
      
      s.add_ast(`${nombreNodo}${x}[label="\\n${x}"]\n;
                ${nombreNodo}1->${nombreNodo}${x}\n`);
    }
    s.add_ast(`
    ${nombreNodo}2[label="\\<Tipo\\>\\n${getType(this.tipo)}"];
    ${nombreNodo}->${nombreNodo}1
    ${nombreNodo}->${nombreNodo}2
    `)
}
}