import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Error } from "./Error";

export class Incremento extends Instruccion {
  constructor(
    public nombre: string,
    public dim1: Expression | null,
    public dim2: Expression | null,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute2(env: Environment) {
  }
  public execute(env: Environment, sn: Singleton) {
    if (env.buscar_variable(this.nombre)) {

      if (this.dim2 != null && this.dim1 != null) {
        let exp1 = this.dim1.execute(env, sn)
        let exp2 = this.dim2.execute(env, sn)

        if ((Type.NUMBER == env.getTipo_variable(this.nombre) || Type.DECIMAL == env.getTipo_variable(this.nombre)) && exp1.type == Type.NUMBER && exp2.type == Type.NUMBER) {
          env.actualizar_Matriz(this.nombre, Number(env.getValue_Matriz(this.nombre, exp1.value, exp2.value)) + 1, exp1.value, exp2.value)
          console.log("variable [" + this.nombre + "] actualizada con exito...");
        } else {
          sn.addError(new Error(" [" + this.nombre + "] tiene valor de otro tipo", "SEMANTICO", this.line, this.column));
        }
      } else if (this.dim1 != null && this.dim2 == null) {
        let exp1 = this.dim1.execute(env, sn)
        if ((Type.NUMBER == env.getTipo_variable(this.nombre) || Type.DECIMAL == env.getTipo_variable(this.nombre)) && exp1.type == Type.NUMBER) {
          env.actualizar_Vector(this.nombre, Number(env.getValue_Vector(this.nombre, exp1.value)) + 1, exp1.value)
          console.log("variable [" + this.nombre + "] actualizada con exito...");
        } else {
          sn.addError(new Error(" [" + this.nombre + "] tiene valor de otro tipo", "SEMANTICO", this.line, this.column));
        }
      } else {
        if (Type.NUMBER == env.getTipo_variable(this.nombre) || Type.DECIMAL == env.getTipo_variable(this.nombre)) {
          env.actualizar_variable(this.nombre, Number(env.getValue_variable(this.nombre)) + 1)
          console.log("variable [" + this.nombre + "] actualizada con exito...");
        } else {
          sn.addError(new Error(" [" + this.nombre + "] tiene valor de otro tipo", "SEMANTICO", this.line, this.column));
        }
      }
    } else {
      sn.addError(new Error(" [" + this.nombre + "] no fue encontrada", "SEMANTICO", this.line, this.column));
    }
  }
  public ast(s:Singleton) {
    
    const nombre_nodo=`node_${this.line}_${this.column}_`
    return `
    /**/${nombre_nodo};
    ${nombre_nodo}1[label="{${this.nombre}}"];
    ${nombre_nodo}[label="INCREMENTO"];
    ${nombre_nodo}->${nombre_nodo}1;
    `
}
}