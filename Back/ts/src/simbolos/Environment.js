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
            this.tablaSimbolos.set(nombre, new simbolos_1.simbolos(valor, nombre, type));
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
    actualizar_variable(nombre, valor) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) {
                entry[1].value = valor;
            }
        }
    }
}
exports.Environment = Environment;
