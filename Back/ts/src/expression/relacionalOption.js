"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_simbolo = exports.RelacionalOption = void 0;
var RelacionalOption;
(function (RelacionalOption) {
    /*0*/ RelacionalOption[RelacionalOption["IGUAL"] = 0] = "IGUAL";
    /*1*/ RelacionalOption[RelacionalOption["MENOR"] = 1] = "MENOR";
    /*2*/ RelacionalOption[RelacionalOption["MAYOR"] = 2] = "MAYOR";
    /*3*/ RelacionalOption[RelacionalOption["MENORIGUAL"] = 3] = "MENORIGUAL";
    /*4*/ RelacionalOption[RelacionalOption["MAYORIGUAL"] = 4] = "MAYORIGUAL";
    /*5*/ RelacionalOption[RelacionalOption["DIFERENTE"] = 5] = "DIFERENTE";
    /*6*/ RelacionalOption[RelacionalOption["error"] = 6] = "error";
})(RelacionalOption = exports.RelacionalOption || (exports.RelacionalOption = {}));
function get_simbolo(objeto) {
    switch (objeto) {
        case 0:
            return "==";
        case 5:
            return "!=";
        case 1:
            return "\\<";
        case 3:
            return "\\<=";
        case 2:
            return "\\>";
        case 4:
            return "\\>=";
        default:
            return "";
    }
}
exports.get_simbolo = get_simbolo;
