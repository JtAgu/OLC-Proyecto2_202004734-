"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getType = exports.Type = void 0;
var Type;
(function (Type) {
    Type[Type["NUMBER"] = 0] = "NUMBER";
    Type[Type["DECIMAL"] = 1] = "DECIMAL";
    Type[Type["CHAR"] = 2] = "CHAR";
    Type[Type["STRING"] = 3] = "STRING";
    Type[Type["BOOLEAN"] = 4] = "BOOLEAN";
    Type[Type["ID"] = 5] = "ID";
    Type[Type["BREAK"] = 6] = "BREAK";
    Type[Type["RETURN"] = 7] = "RETURN";
    Type[Type["CONTINUE"] = 8] = "CONTINUE";
    Type[Type["VOID"] = 9] = "VOID";
    Type[Type["error"] = 10] = "error";
})(Type = exports.Type || (exports.Type = {}));
function getType(objeto) {
    switch (objeto) {
        case 0:
            return "INT";
        case 1:
            return "DOUBLE";
        case 2:
            return "CHAR";
        case 3:
            return "STRING";
        case 4:
            return "BOOLEAN";
        case 9:
            return "VOID";
        default:
            return "";
    }
}
exports.getType = getType;
