"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.get_simbolo = exports.ArithmeticOption = void 0;
var ArithmeticOption;
(function (ArithmeticOption) {
    /*0*/ ArithmeticOption[ArithmeticOption["MAS"] = 0] = "MAS";
    /*1*/ ArithmeticOption[ArithmeticOption["MENOS"] = 1] = "MENOS";
    /*2*/ ArithmeticOption[ArithmeticOption["MULTIPLICACION"] = 2] = "MULTIPLICACION";
    /*3*/ ArithmeticOption[ArithmeticOption["DIV"] = 3] = "DIV";
    /*4*/ ArithmeticOption[ArithmeticOption["MODULO"] = 4] = "MODULO";
    /*5*/ ArithmeticOption[ArithmeticOption["POT"] = 5] = "POT";
    /*6*/ ArithmeticOption[ArithmeticOption["NEGACION"] = 6] = "NEGACION";
    /*7*/ ArithmeticOption[ArithmeticOption["INCR"] = 7] = "INCR";
    /*8*/ ArithmeticOption[ArithmeticOption["DECR"] = 8] = "DECR";
})(ArithmeticOption = exports.ArithmeticOption || (exports.ArithmeticOption = {}));
function get_simbolo(objeto) {
    switch (objeto) {
        case 0:
            return "+";
        case 1:
            return "-";
        case 6:
            return "-";
        case 2:
            return "*";
        case 3:
            return "/";
        case 4:
            return "%";
        case 5:
            return "**";
        case 7:
            return "++";
        case 8:
            return "--";
        default:
            return "";
    }
}
exports.get_simbolo = get_simbolo;
/**
 *
 * @param objeto Enum ArithmeticOption
 * @return nombre del simbolo en string
 */
function getName(objeto) {
    switch (objeto) {
        case 0:
            return "suma";
        case 1:
            return "resta";
        case 6:
            return "resta";
        case 2:
            return "mutiplicacion";
        case 3:
            return "division";
        case 4:
            return "modulo";
        case 5:
            return "potencia";
        case 7:
            return "incremento";
        case 8:
            return "decremento";
        default:
            return "";
    }
}
exports.getName = getName;
