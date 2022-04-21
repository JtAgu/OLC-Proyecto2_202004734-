import { Instruccion } from "../abstract/Instruccion";
import { Declaracion } from "../instruccion/Declaracion";
import { simbolos } from "./simbolos";
import { Type } from "./Type";

export class Environment {
  private tablaSimbolos: Map<string, simbolos>|Map<string,simbolos>
  constructor(public anterior: Environment | null) {
    this.tablaSimbolos = new Map();
  }

  

  public getEnv() {
    return this.tablaSimbolos
  }

  public guardar_variable(nombre: string, valor: any, type: Type): boolean {
    if (!this.buscar_variable(nombre)) {
      this.tablaSimbolos.set(nombre, new simbolos(valor, nombre, type, 1, 0, 0,null,null));
      return true
    }
    console.log("esta variable [" + nombre + "] ya existe...");
    return false
  }

  public guardar_Funcion(nombre: string, type: Type,Ins:Array<Instruccion>,Param:Array<Declaracion>|null): boolean {
    if (!this.buscar_variable(nombre)) {
      this.tablaSimbolos.set(nombre, new simbolos(null, nombre, type, 1, 0, 0,Ins,Param));
      return true
    }
    console.log("esta variable [" + nombre + "] ya existe...");
    return false
  }


  public buscar_variable(nombre: string): boolean {

    let envActual: Environment | null = this;
    while (envActual != null) {
      for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
        if (entry[0] == nombre){
          return true;
        } 
      }
      envActual = envActual.anterior;
    }
    return false
  }

  public getTipo_variable(nombre: string): Type {
    let envActual: Environment | null = this;
    while (envActual != null) {
      for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
        if (entry[0] == nombre) return entry[1].tipo;
      }
      envActual = envActual.anterior;
    }
    return Type.error
  }

  public getParam_variable(nombre: string): Array<Declaracion>|null {
    let envActual: Environment | null = this;
    while (envActual != null) {
      for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
        if (entry[0] == nombre) return entry[1].Parametros;
      }
      envActual = envActual.anterior;
    }
    return null
  }

  public getIns_variable(nombre: string): Array<Instruccion>|null {
    let envActual: Environment | null = this;
    while (envActual != null) {
      for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
        if (entry[0] == nombre) return entry[1].Instrucciones;
      }
      envActual = envActual.anterior;
    }
    return null
  }


  public getValue_variable(nombre: string): Type {
    let envActual: Environment | null = this;
    while (envActual != null) {
      for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
        if (entry[0] == nombre) return entry[1].value;
      }
      envActual = envActual.anterior;
    }
    return Type.error
  }

  public getDimension_variable(nombre: string): Number {
    let envActuall: Environment | null = this;
    while (envActuall != null) {
      for (let entry of Array.from(envActuall.tablaSimbolos.entries())) {
        if (entry[0] == nombre) return entry[1].Dimension;
      }
      envActuall = envActuall.anterior;
    }
    return Type.error
  }

  public actualizar_variable(nombre: string, valor: any) {
    let envActual: Environment | null = this;
    while (envActual != null) {
      for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
        if (entry[0] == nombre) {
          entry[1].value = valor;
        }
      }
      envActual = envActual.anterior;
    }

  }

  public guardar_Vector(nombre: string, valor: any, type: Type, dim1: Number): boolean {

    if (!this.buscar_variable(nombre)) {
      this.tablaSimbolos.set(nombre, new simbolos(valor, nombre, type, 2, dim1, 0,null,null));
      return true
    }

    console.log("esta variable [" + nombre + "] ya existe...");
    return false
  }

  public getValue_Vector(nombre: string, dim1: any): Type {
    let envActual: Environment | null = this;
    while (envActual != null) {
      for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
        if (entry[0] == nombre) {
          return entry[1].value[dim1];
        }
      }
      envActual = envActual.anterior;
    }
    return Type.error
  }

  public actualizar_Vector(nombre: string, valor: any, dim1: any) {
    let envActual: Environment | null = this;
    while (envActual != null) {
      for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
        if (entry[0] == nombre) {
          entry[1].value[dim1] = valor;
        }
      }
      envActual = envActual.anterior;
    }
  }

  public getDim1_Vector(nombre: string): Number {
    let envActual: Environment | null = this;
    while (envActual != null) {
      for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
        if (entry[0] == nombre) return entry[1].dim1;
      }
      envActual = envActual.anterior;
    }
    return Type.error
  }

  public guardar_Matriz(nombre: string, valor: any, type: Type, dim1: any, dim2: any): boolean {

    if (!this.buscar_variable(nombre)) {
      this.tablaSimbolos.set(nombre, new simbolos(valor, nombre, type, 3, dim1, dim2,null,null));
      return true
    }
    console.log("esta variable [" + nombre + "] ya existe...");
    return false
  }


  public getValue_Matriz(nombre: string, dim1: any, dim2: any): Type {
    let envActual: Environment | null = this;
    while (envActual != null) {
      for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
        if (entry[0] == nombre) {
          let v = entry[1].value[dim1]
          return v[dim2];
        }
      }
      envActual = envActual.anterior;
    }
    return Type.error
  }

  public actualizar_Matriz(nombre: string, valor: any, dim1: any, dim2: any) {
    let envActual: Environment | null = this;
    while (envActual != null) {
      for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
        if (entry[0] == nombre) {
          entry[1].value[dim1][dim2] = valor;
        }
      }
      envActual = envActual.anterior;
    }
  }

  public getDim1_Matriz(nombre: string): Number {
    let envActual: Environment | null = this;
    while (envActual != null) {
      for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
        if (entry[0] == nombre) return entry[1].dim1;
      }
      envActual = envActual.anterior;
    }
    return Type.error
  }

  public getDim2_Matriz(nombre: string): Number {
    let envActual: Environment | null = this;
    while (envActual != null) {
      for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
        if (entry[0] == nombre) return entry[1].dim2;
      }
      envActual = envActual.anterior;
    }
    return Type.error
  }
}