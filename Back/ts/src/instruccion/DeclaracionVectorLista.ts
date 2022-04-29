import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Error } from "./Error";

export class DeclaracionVectorLista extends Instruccion {
  constructor(
    public nombre: string,
    public tipo: Type,
    public valores: Array<Expression> | null,
    public valorS: Expression | null,
    line: number,
    column: number
  ) {
    super(line, column);
  }


  public execute2(env: Environment) {
  }


  public execute(env: Environment, sn: Singleton) {

    let Concordancia = true;
    if (this.valores != null) {
      let val: Array<any> = [];
      for (const x of this.valores) {
        let exp = x.execute(env, sn);
        if (exp.type == this.tipo) {
          val.push(exp.value);
        } else {
          sn.addError(new Error("Declaracion de [" + this.nombre + "] con tipo incorrecto", "SEMANTICO", this.line, this.column));
          Concordancia = false;
          break;
        }
      }
      if (Concordancia) {
        const condicion = env.guardar_Vector(this.nombre,this.line,this.column, val, this.tipo, val.length);
        if (condicion) {
          console.log("variable [" + this.nombre + "] ingresada...");
        } else {
          console.log("variable [" + this.nombre + "] no ingresada...");
        }
      }
    } else {
      let val: Array<any> = [];
      let exp = this.valorS?.execute(env, sn);
      if (exp?.type == Type.STRING) {
        for (const s of exp.value) {
          val.push(s);
        }
        const condicion = env.guardar_Vector(this.nombre,this.line,this.column, val, this.tipo, val.length);
        if (condicion) {
          console.log("variable [" + this.nombre + "] ingresada...");
        } else {
          console.log("variable [" + this.nombre + "] no ingresada...");
        }
      }
    }

  }

  public ast(s:Singleton) {
    
    const name_node = `node_${this.line}_${this.column}_`
    s.add_ast(`
    ${name_node}[label="\\<Instruccion\\>\\nArray Declaracion"];
    ${name_node}1[label="\\<Nombre\\>\\n{${this.nombre}}"];
    ${name_node}2[label="\\<Tipo\\>\\n${this.tipo}"];
    ${name_node}3[label="\\<Contenido\\>"];
    ${name_node}->${name_node}1;
    ${name_node}->${name_node}2;
    ${name_node}->${name_node}3;
    `)
    if(this.valores!=null){
      this.valores.forEach(element => {
        s.add_ast(`
        ${name_node}3->${element.ast(s)}
        `)
    })
    }
}
}