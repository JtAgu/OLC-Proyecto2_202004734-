import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";

export class DeclaracionMatrizNew extends Instruccion {
  constructor(
    public nombre: string,
    public tipo: Type,
    public Dim1:Expression,
    public Dim2:Expression,
    public tipo2: Type,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public execute(env: Environment) {
    
    let exp= this.Dim1.execute(env);
    let exp2= this.Dim2.execute(env);
      if(exp.type==Type.NUMBER&&exp2.type==Type.NUMBER&&this.tipo==this.tipo2){
        if (Type.NUMBER == this.tipo||Type.DECIMAL == this.tipo){
            let valor:any=[[],[]];
            let n=Number(exp.value)
            let m=Number(exp2.value)
            for(var j=0;j<m;j++){
                for(var i=0;i<n;i++){
                    valor[[i][j]]=0;
                }
            }
            
            const condicion = env.guardar_Matriz(this.nombre,valor, this.tipo,exp.value,exp2.value);
            if (condicion){
              console.log("variable ["+this.nombre+"] ingresada...");
            }else{
              console.log("variable ["+this.nombre+"] no ingresada...");
            }
          }else if (Type.CHAR == this.tipo){
            let valor:any=[[],[]];
            let n=Number(exp.value)
            let m=Number(exp2.value)
            for(var j=0;j<m;j++){
                for(var i=0;i<n;i++){
                    valor[[i][j]]='0';
                }
            }
            const condicion = env.guardar_Matriz(this.nombre,valor, this.tipo,exp.value,exp2.value);
            if (condicion){
              console.log("variable ["+this.nombre+"] ingresada...");
            }else{
              console.log("variable ["+this.nombre+"] no ingresada...");
            }
          }else if (Type.BOOLEAN == this.tipo){
            let valor:any=[[],[]];
            let n=Number(exp.value)
            let m=Number(exp2.value)
            for(var j=0;j<m;j++){
                for(var i=0;i<n;i++){
                    valor[[i][j]]=Boolean(true);
                }
            }
            const condicion = env.guardar_Matriz(this.nombre,valor, this.tipo,exp.value,exp2.value);
            if (condicion){
              console.log("variable ["+this.nombre+"] ingresada...");
            }else{
              console.log("variable ["+this.nombre+"] no ingresada...");
            }
          }else if (Type.STRING == this.tipo){
            let valor:any=[[],[]];
            let n=Number(exp.value)
            let m=Number(exp2.value)
            for(var j=0;j<m;j++){
                for(var i=0;i<n;i++){
                    valor[[i][j]]="";
                }
            }
            const condicion = env.guardar_Matriz(this.nombre,valor, this.tipo,exp.value,exp2.value);
            if (condicion){
              console.log("variable ["+this.nombre+"] ingresada...");
            }else{
              console.log("variable ["+this.nombre+"] no ingresada...");
            }
          }else{
            console.log("error semantico, declaracion de variable ["+this.nombre+"] no correcta");
          }
      }

    
    
  }
}