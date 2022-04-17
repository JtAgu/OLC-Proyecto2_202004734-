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
          this.tablaSimbolos.set(nombre, new simbolos(valor, nombre, type,1,0,0));
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

      public getValue_variable(nombre: string): Type {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) return entry[1].value;
        }
        return Type.error
      }

      public getDimension_variable(nombre: string): Number {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) return entry[1].Dimension;
        }
        return Type.error
      }

      public actualizar_variable(nombre: string, valor: any) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
          if (entry[0] == nombre) {
              entry[1].value= valor;
          }
        }
      }

      public guardar_Vector(nombre: string, valor: any, type: Type,dim1:Number): boolean {
        if(!this.buscar_variable(nombre)){
          this.tablaSimbolos.set(nombre, new simbolos(valor, nombre, type,2,dim1,0));
          return true
        }
        console.log("esta variable ["+nombre+"] ya existe...");
        return false
      }

      public getValue_Vector(nombre: string,dim1:any): Type {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre){
              return entry[1].value[dim1];
            } 
        }
        return Type.error
      }

      public actualizar_Vector(nombre: string, valor: any, dim1:any) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
          if (entry[0] == nombre) {
              entry[1].value[dim1] = valor;
          }
        }
      }
      
      public getDim1_Vector(nombre: string): Number {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) return entry[1].dim1;
        }
        return Type.error
      }
      
      public guardar_Matriz(nombre: string, valor: any, type: Type,dim1:any,dim2:any): boolean {
        if(!this.buscar_variable(nombre)){
          this.tablaSimbolos.set(nombre, new simbolos(valor, nombre, type,3,dim1,dim2));
          return true
        }
        console.log("esta variable ["+nombre+"] ya existe...");
        return false
      }


      public getValue_Matriz(nombre: string,dim1:any,dim2:any): Type {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) return entry[1].value[dim1][dim2];
        }
        return Type.error
      }

      public actualizar_Matriz(nombre: string, valor: any,dim1:any,dim2:any) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
          if (entry[0] == nombre) {
              entry[1].value[dim1][dim2] = valor;
          }
        }
      }

      public getDim1_Matriz(nombre: string): Number {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) return entry[1].dim1;
        }
        return Type.error
      }

      public getDim2_Matriz(nombre: string): Number {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) return entry[1].dim1;
        }
        return Type.error
      }
}