"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor() {
        this.message = ["", Array, ""];
        var s = [];
        this.message[1] = s;
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    addMsg(data) {
        this.message[0] += data;
    }
    getMsg() {
        return this.message[0];
    }
    getError() {
        return this.message[1];
    }
    addError(data) {
        this.message[1].push(data);
    }
}
exports.Singleton = Singleton;
