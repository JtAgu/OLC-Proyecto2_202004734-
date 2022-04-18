import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";

export class ELSE extends Instruccion {
  constructor(
    public Intrucciones:Array<Instruccion>|null,
    line: number,
    column: number
  ) {
    super(line, column);
  }

    public execute(env: Environment) {
        
        if(this.Intrucciones!=null){
            const envElse = new Environment(env);
            for(const x of this.Intrucciones){
                x.execute(envElse);
            }
        }
    }
}