import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Error } from "./Error";

export class DeclaracionVectorNew extends Instruccion {
  constructor(
    public nombre: string,
    public tipo: Type,
    public Dim1: Expression,
    public tipo2: Type,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute2(env: Environment) {
  }
  public execute(env: Environment, sn: Singleton) {

    let exp = this.Dim1.execute(env, sn)
    if (exp.type == Type.NUMBER && this.tipo == this.tipo2) {
      if (Type.NUMBER == this.tipo || Type.DECIMAL == this.tipo) {
        let valor: any = [];
        let n = Number(exp.value)
        for (var i = 0; i < n; i++) {
          valor[i] = 0;
        }
        const condicion = env.guardar_Vector(this.nombre,this.line,this.column, valor, this.tipo, exp.value);
        if (condicion) {
          console.log("variable [" + this.nombre + "] ingresada...");
        } else {
          console.log("variable [" + this.nombre + "] no ingresada...");
        }
      } else if (Type.CHAR == this.tipo) {
        let valor: any = [];
        let n = Number(exp.value)
        for (var i = 0; i < n; i++) {
          valor[i] = '0';
        }
        const condicion = env.guardar_Vector(this.nombre,this.line,this.column, valor, this.tipo, exp.value);
        if (condicion) {
          console.log("variable [" + this.nombre + "] ingresada...");
        } else {
          console.log("variable [" + this.nombre + "] no ingresada...");
        }
      } else if (Type.BOOLEAN == this.tipo) {
        let valor: any = [];
        let n = Number(exp.value)
        for (var i = 0; i < n; i++) {
          valor[i] = Boolean(true);
        }
        const condicion = env.guardar_Vector(this.nombre,this.line,this.column, valor, this.tipo, exp.value);
        if (condicion) {
          console.log("variable [" + this.nombre + "] ingresada...");
        } else {
          console.log("variable [" + this.nombre + "] no ingresada...");
        }
      } else if (Type.STRING == this.tipo) {
        let valor: any = [];
        let n = Number(exp.value)
        for (var i = 0; i < n; i++) {
          valor[i] = "";
        }
        const condicion = env.guardar_Vector(this.nombre,this.line,this.column, valor, this.tipo, exp.value);
        if (condicion) {
          console.log("variable [" + this.nombre + "] ingresada...");
        } else {
          console.log("variable [" + this.nombre + "] no ingresada...");
        }
      } else {
        sn.addError(new Error("Declaracion de ["+this.nombre+"] incorrecta", "SEMANTICO", this.line, this.column));
      }
    } else {
      sn.addError(new Error("Declaracion de ["+this.nombre+"] incorrecta", "SEMANTICO", this.line, this.column));
    }
  }
  public ast(s:Singleton) {
    
    const name_node = `node_${this.line}_${this.column}_`
    s.add_ast(`
    ${name_node}[label="\\<Instruccion\\>\\nArray Declaracion"];
    ${name_node}1[label="\\<Nombre\\>\\n{${this.nombre}}"];
    ${name_node}2[label="\\<Tipo\\>\\n${this.tipo}"];
    
    ${name_node}->${name_node}1;
    ${name_node}->${name_node}2;
    
    `)
    
}
}