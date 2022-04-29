import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type ,getType} from "../simbolos/Type";
import { Error } from "./Error";

export class Declaracion extends Instruccion {
  constructor(
    public nombre: Array<any>,
    public tipo: Type,
    public expresion: Expression|null ,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute2(env: Environment) {
  }
  public execute(env: Environment, sn: Singleton) {
    if (this.expresion != null) {
      let exp = this.expresion.execute(env, sn)

      for (const id of this.nombre) {

        if (exp.type == this.tipo) {
          //console.log(exp);
          const condicion = env.guardar_variable(id,this.line,this.column, exp.value, this.tipo);
          if (condicion) {
            console.log("variable [" + id + "] ingresada...");
          } else {
            console.log("variable [" + id + "] no ingresada...");
          }
        } else {
          console.log("Error");
          sn.addError(new Error(" Expresion con tipo diferente a [" + id + "]", "SEMANTICO", this.line, this.column));
        }
      }
    }
  }

  public ast(s:Singleton) {
    
    
    const nombreNodo = `node_${this.line}_${this.column}_`
    
    s.add_ast(`
    ${nombreNodo}[label="\\<Instruccion\\>\\nDeclaracion const"];
    
    ${nombreNodo}1[label="\\<Nombre\\>"];`)
    for(const x of this.nombre){
      
      s.add_ast(`${nombreNodo}${x}[label="\\n${x}"]\n;
                ${nombreNodo}1->${nombreNodo}${x}\n`);
    }
    s.add_ast(`
    ${nombreNodo}2[label="\\<Tipo\\>\\n${getType(this.tipo)}}"];
    ${nombreNodo}->${nombreNodo}1
    ${nombreNodo}->${nombreNodo}2`)
    if(this.expresion!=null){
      s.add_ast(`
      ${nombreNodo}->${this.expresion.ast(s)}`)
      
    }
    

    return nombreNodo;
  }
}