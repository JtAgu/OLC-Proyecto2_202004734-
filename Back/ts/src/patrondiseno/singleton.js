"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor() {
        this.message = "";
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
}
exports.Singleton = Singleton;
