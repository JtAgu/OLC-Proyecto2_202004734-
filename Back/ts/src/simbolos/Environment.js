"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const simbolos_1 = require("./simbolos");
const Type_1 = require("./Type");
class Environment {
    constructor(anterior, nombre) {
        this.anterior = anterior;
        this.nombre = nombre;
        this.tablaSimbolos = new Map();
    }
    getEnv() {
        return this.tablaSimbolos;
    }
    guardar_variable(nombre, line, column, valor, type) {
        if (!this.buscar_variable(nombre)) {
            this.tablaSimbolos.set(nombre, new simbolos_1.simbolos(valor, nombre, type, line, column, 1, 0, 0, null, null));
            return true;
        }
        console.log("esta variable [" + nombre + "] ya existe...");
        return false;
    }
    guardar_Funcion(nombre, line, column, type, Ins, Param) {
        if (!this.buscar_variable(nombre)) {
            this.tablaSimbolos.set(nombre, new simbolos_1.simbolos(null, nombre, type, line, column, 1, 0, 0, Ins, Param));
            return true;
        }
        console.log("esta variable [" + nombre + "] ya existe...");
        return false;
    }
    buscar_variable(nombre) {
        let envActual = this;
        while (envActual != null) {
            for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
                if (entry[0] == nombre) {
                    return true;
                }
            }
            envActual = envActual.anterior;
        }
        return false;
    }
    getTipo_variable(nombre) {
        let envActual = this;
        while (envActual != null) {
            for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
                if (entry[0] == nombre)
                    return entry[1].tipo;
            }
            envActual = envActual.anterior;
        }
        return Type_1.Type.error;
    }
    getParam_variable(nombre) {
        let envActual = this;
        while (envActual != null) {
            for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
                if (entry[0] == nombre)
                    return entry[1].Parametros;
            }
            envActual = envActual.anterior;
        }
        return null;
    }
    getIns_variable(nombre) {
        let envActual = this;
        while (envActual != null) {
            for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
                if (entry[0] == nombre)
                    return entry[1].Instrucciones;
            }
            envActual = envActual.anterior;
        }
        return null;
    }
    getValue_variable(nombre) {
        let envActual = this;
        while (envActual != null) {
            for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
                if (entry[0] == nombre)
                    return entry[1].value;
            }
            envActual = envActual.anterior;
        }
        return Type_1.Type.error;
    }
    getDimension_variable(nombre) {
        let envActuall = this;
        while (envActuall != null) {
            for (let entry of Array.from(envActuall.tablaSimbolos.entries())) {
                if (entry[0] == nombre)
                    return entry[1].Dimension;
            }
            envActuall = envActuall.anterior;
        }
        return Type_1.Type.error;
    }
    actualizar_variable(nombre, valor) {
        let envActual = this;
        while (envActual != null) {
            for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
                if (entry[0] == nombre) {
                    entry[1].value = valor;
                }
            }
            envActual = envActual.anterior;
        }
    }
    guardar_Vector(nombre, line, column, valor, type, dim1) {
        if (!this.buscar_variable(nombre)) {
            this.tablaSimbolos.set(nombre, new simbolos_1.simbolos(valor, nombre, type, line, column, 2, dim1, 0, null, null));
            return true;
        }
        console.log("esta variable [" + nombre + "] ya existe...");
        return false;
    }
    getValue_Vector(nombre, dim1) {
        let envActual = this;
        while (envActual != null) {
            for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
                if (entry[0] == nombre) {
                    return entry[1].value[dim1];
                }
            }
            envActual = envActual.anterior;
        }
        return Type_1.Type.error;
    }
    actualizar_Vector(nombre, valor, dim1) {
        let envActual = this;
        while (envActual != null) {
            for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
                if (entry[0] == nombre) {
                    entry[1].value[dim1] = valor;
                }
            }
            envActual = envActual.anterior;
        }
    }
    getDim1_Vector(nombre) {
        let envActual = this;
        while (envActual != null) {
            for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
                if (entry[0] == nombre)
                    return entry[1].dim1;
            }
            envActual = envActual.anterior;
        }
        return Type_1.Type.error;
    }
    guardar_Matriz(nombre, line, column, valor, type, dim1, dim2) {
        if (!this.buscar_variable(nombre)) {
            this.tablaSimbolos.set(nombre, new simbolos_1.simbolos(valor, nombre, type, line, column, 3, dim1, dim2, null, null));
            return true;
        }
        console.log("esta variable [" + nombre + "] ya existe...");
        return false;
    }
    getValue_Matriz(nombre, dim1, dim2) {
        let envActual = this;
        while (envActual != null) {
            for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
                if (entry[0] == nombre) {
                    let v = entry[1].value[dim1];
                    return v[dim2];
                }
            }
            envActual = envActual.anterior;
        }
        return Type_1.Type.error;
    }
    actualizar_Matriz(nombre, valor, dim1, dim2) {
        let envActual = this;
        while (envActual != null) {
            for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
                if (entry[0] == nombre) {
                    entry[1].value[dim1][dim2] = valor;
                }
            }
            envActual = envActual.anterior;
        }
    }
    getDim1_Matriz(nombre) {
        let envActual = this;
        while (envActual != null) {
            for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
                if (entry[0] == nombre)
                    return entry[1].dim1;
            }
            envActual = envActual.anterior;
        }
        return Type_1.Type.error;
    }
    getDim2_Matriz(nombre) {
        let envActual = this;
        while (envActual != null) {
            for (let entry of Array.from(envActual.tablaSimbolos.entries())) {
                if (entry[0] == nombre)
                    return entry[1].dim2;
            }
            envActual = envActual.anterior;
        }
        return Type_1.Type.error;
    }
}
exports.Environment = Environment;
