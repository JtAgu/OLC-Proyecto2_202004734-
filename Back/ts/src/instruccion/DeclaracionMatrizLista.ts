import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class DeclaracionMatrizLista extends Instruccion {
  constructor(
    public nombre: string,
    public tipo: Type,
    public valores:Array<Array<Expression>>,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment) {
    
    let Concordancia=true;
    let val:Array<any> = [];
    var i=0;
    var j=0;
    for(const x of this.valores){
      let val2:Array<any> = [];
      j=0;
      i++;
      for(const y of x ){
        j++;
        let exp= y.execute(env);
        if(exp.type==this.tipo){
            val2.push(exp.value);
        }else{
            console.log("error semantico, declaracion de variable ["+this.nombre+"] no correcta");
            Concordancia=false;
            break;
        }
      }
      if(!Concordancia){
        break;
      }
      val.push(val2);
    }
    
    if(Concordancia){
      
      const condicion = env.guardar_Matriz(this.nombre,val, this.tipo,i,j);
      if (condicion){
        console.log("variable ["+this.nombre+"] ingresada...");
      }else{
        console.log("variable ["+this.nombre+"] no ingresada...");
      }
    }
  }
}