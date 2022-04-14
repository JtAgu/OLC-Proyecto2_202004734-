import { simbolos } from "./simbolos";
import { Type } from "./Type";

export class Environment{
    private tablaSimbolos:Map<string,simbolos>
    constructor(public anterior :Environment|null){
        this.tablaSimbolos=new Map();
    }

    public getEnv(){
        return this.tablaSimbolos
      }
    
      public guardar_variable(nombre: string, valor: any, type: Type): boolean {
        
        if(!this.buscar_variable(nombre)){
          this.tablaSimbolos.set(nombre, new simbolos(valor, nombre, type));
          return true
        }
        console.log("esta variable ["+nombre+"] ya existe...");
        return false
      }
    
      public buscar_variable(nombre: string): boolean {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) return true;
        }
        return false
      }
      public getTipo_variable(nombre: string): Type {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) return entry[1].tipo;
        }
        return Type.error
      }
      public actualizar_variable(nombre: string, valor: any) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
          if (entry[0] == nombre) {
              entry[1].value = valor;
          }
      }
      }

}