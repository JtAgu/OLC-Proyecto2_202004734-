import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { SWITCHCASE } from "./SwitchCase";

export class SWITCH extends Instruccion {
  constructor(
    public Expresion: Expression,
    public ListaCase: Array<SWITCHCASE> | null,
    public Default: Array<Instruccion> | null,
    line: number,
    column: number
  ) {
    super(line, column);
  }
  public execute2(env: Environment) {
  }
  public execute(env: Environment, sn: Singleton) {
    const envSw = new Environment(env,"AMBIENTE SWITCH");
    if (this.ListaCase != null) {

      let expN = this.Expresion.execute(env, sn);
      let br = false;
      for (const x of this.ListaCase) {
        let exp = x.ExpresionC.execute(env, sn);
        if (exp.type == expN.type && exp.value == expN.value) {
          var corte: Retorno = x.execute(envSw, sn);
          expN = this.Expresion.execute(env, sn);
          if (corte.type == Type.BREAK) {
            br = true;
            break;
          }
        }

      }
      if (!br) {
        if (this.Default != null) {
          for (const x of this.Default) {
            x.execute(envSw, sn)
          }
        }

      }
    } else if (this.Default != null) {
      for (const x of this.Default) {
        x.execute(envSw, sn)
      }
    }
    sn.addEnv(envSw);
  }
  public ast(s:Singleton) {
    
    const name_node = `node_${this.line}_${this.column}_`
    s.add_ast(`
    ${name_node}[label="\\<Instruccion\\>\\nSwitch"];
    ${name_node}1[label="\\<Condicion\\>"];
    ${name_node}->${name_node}1;
    ${name_node}1->${this.Expresion.ast(s)}        
    `)
    if(this.ListaCase!=null){
        for(const x of this.ListaCase){
            s.add_ast(`
            ${name_node}->node_${x.line}_${x.column}_;        
            `)
            x.ast(s)
        }
    }
    if(this.Default!=null){
      s.add_ast(`
            ${name_node}->${name_node}Default_;
            ${name_node}Default_[label="\\<Instruccion\\>\\nDEFAULT"];
      `)
      for(const x of this.Default){
        s.add_ast(`
          ${name_node}Default_ -> node_${x.line}_${x.column}_;
        `)
        x.ast(s)
    }

    }
}

}
