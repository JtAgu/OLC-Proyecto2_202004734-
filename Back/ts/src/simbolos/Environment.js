"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const simbolos_1 = require("./simbolos");
const Type_1 = require("./Type");
class Environment {
    constructor(anterior) {
        this.anterior = anterior;
        this.tablaSimbolos = new Map();
    }
    getEnv() {
        return this.tablaSimbolos;
    }
    guardar_variable(nombre, valor, type) {
        if (!this.buscar_variable(nombre)) {
            this.tablaSimbolos.set(nombre, new simbolos_1.simbolos(valor, nombre, type, 1, 0, 0));
            return true;
        }
        console.log("esta variable [" + nombre + "] ya existe...");
        return false;
    }
    buscar_variable(nombre) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre)
                return true;
        }
        return false;
    }
    getTipo_variable(nombre) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre)
                return entry[1].tipo;
        }
        return Type_1.Type.error;
    }
    getValue_variable(nombre) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre)
                return entry[1].value;
        }
        return Type_1.Type.error;
    }
    getDimension_variable(nombre) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre)
                return entry[1].Dimension;
        }
        return Type_1.Type.error;
    }
    actualizar_variable(nombre, valor) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) {
                entry[1].value = valor;
            }
        }
    }
    guardar_Vector(nombre, valor, type, dim1) {
        if (!this.buscar_variable(nombre)) {
            this.tablaSimbolos.set(nombre, new simbolos_1.simbolos(valor, nombre, type, 2, dim1, 0));
            return true;
        }
        console.log("esta variable [" + nombre + "] ya existe...");
        return false;
    }
    getValue_Vector(nombre, dim1) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) {
                return entry[1].value[dim1];
            }
        }
        return Type_1.Type.error;
    }
    actualizar_Vector(nombre, valor, dim1) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) {
                entry[1].value[dim1] = valor;
            }
        }
    }
    getDim1_Vector(nombre) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre)
                return entry[1].dim1;
        }
        return Type_1.Type.error;
    }
    guardar_Matriz(nombre, valor, type, dim1, dim2) {
        if (!this.buscar_variable(nombre)) {
            this.tablaSimbolos.set(nombre, new simbolos_1.simbolos(valor, nombre, type, 3, dim1, dim2));
            return true;
        }
        console.log("esta variable [" + nombre + "] ya existe...");
        return false;
    }
    getValue_Matriz(nombre, dim1, dim2) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre)
                return entry[1].value[dim1][dim2];
        }
        return Type_1.Type.error;
    }
    actualizar_Matriz(nombre, valor, dim1, dim2) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) {
                entry[1].value[dim1][dim2] = valor;
            }
        }
    }
    getDim1_Matriz(nombre) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre)
                return entry[1].dim1;
        }
        return Type_1.Type.error;
    }
    getDim2_Matriz(nombre) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre)
                return entry[1].dim1;
        }
        return Type_1.Type.error;
    }
}
exports.Environment = Environment;
