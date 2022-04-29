import { Instruccion } from "../abstract/Instruccion";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Decremento } from "./decremento";
import { Incremento } from "./Incremento";

export class ELSE extends Instruccion {
  constructor(
    public Intrucciones: Array<Instruccion> | null,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute2(env: Environment) {
  }
  public execute(env: Environment, sn: Singleton) {

    if (this.Intrucciones != null) {
      const envElse = new Environment(env, "AMBIENTE ELSE");
      for (const x of this.Intrucciones) {
        var corte = x.execute(envElse, sn);
        
        if (corte != undefined && corte.type != Type.VOID) {
          
          return corte
        }
      
    }
    sn.addEnv(envElse);
  }


}

    public ast(s: Singleton) {

  const name_node = `node_${this.line}_${this.column}_`
  s.add_ast(`
      ${name_node}[label="\\<Instruccion\\>\\nelse"];`)

  if (this.Intrucciones != null) {
    for (const x of this.Intrucciones) {
      s.add_ast(`
            ${name_node}->node_${x.line}_${x.column}_;        
            `)
            var t=x.ast(s)
            if(x instanceof Incremento||x instanceof Decremento){
                s.add_ast(t+"");
            }
    }
  }
}
}