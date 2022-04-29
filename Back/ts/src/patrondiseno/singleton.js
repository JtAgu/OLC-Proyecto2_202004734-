"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
const Error_1 = require("../instruccion/Error");
class Singleton {
    constructor() {
        this.message = "";
        this.ast = "";
        this.error = "";
        this.entorno = [];
        this.consola = "";
        this.pila = [];
        this.c = 1;
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    addMsg(data) {
        this.message += data;
    }
    getMsg() {
        return this.message;
    }
    addError(data) {
        console.log(Error_1.Error);
        this.error +=
            "<tr>" +
                "<td>" + this.c + "</td>" +
                "<td>" + data.tipo + "</td>" +
                "<td>" + data.Lexema + "</td>" +
                "<td>" + data.line + "</td>" +
                "<td>" + data.column + "</td>" +
                "</tr>";
        this.c++;
    }
    /**
     *
     * @returns un string con el codigo con el formato html para reportar
     */
    get_error() {
        return `
        ${this.error}
        `;
    }
    add_ast(data) {
        this.ast += data;
    }
    get_ast() {
        return this.ast;
    }
    add_consola(data) {
        this.consola += data;
    }
    get_consola() {
        return this.consola;
    }
    /**
     * add_pila
     */
    add_pila(data) {
        this.pila.push(data);
    }
    addEnv(data) {
        this.entorno.push(data);
    }
    get_entorno() {
        var cadena = "";
        //console.log(this.entorno);
        for (const Env of this.entorno) {
            var tablaS = Env.getEnv();
            //  console.log(tablaS);
            for (const v of tablaS) {
                cadena += "<tr>\n" +
                    "<td>" + v[1].id + "</td>\n" +
                    "<td>" + v[1].tipo + "</td>\n";
                if (v[1].Instrucciones != null) {
                    cadena += "<td>Funcion</td>\n";
                }
                else if (v[1].dim2 > 0) {
                    cadena += "<td>Matriz</td>\n";
                }
                else if (v[1].dim1 > 0) {
                    cadena += "<td>Vector</td>\n";
                }
                else {
                    cadena += "<td>Variable</td>\n";
                }
                cadena += "<td>" + Env.nombre + "</td>\n"
                    + "<td>" + v[1].line + "</td>\n"
                    + "<td>" + v[1].column + "</td>\n";
                "</tr>\n";
            }
        }
        return cadena;
    }
}
exports.Singleton = Singleton;
