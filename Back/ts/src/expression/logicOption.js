"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_simbolo = exports.LogicOption = void 0;
var LogicOption;
(function (LogicOption) {
    /*0*/ LogicOption[LogicOption["NOT"] = 0] = "NOT";
    /*1*/ LogicOption[LogicOption["AND"] = 1] = "AND";
    /*2*/ LogicOption[LogicOption["OR"] = 2] = "OR";
    /*3*/ LogicOption[LogicOption["error"] = 3] = "error";
})(LogicOption = exports.LogicOption || (exports.LogicOption = {}));
function get_simbolo(objeto) {
    switch (objeto) {
        case 0:
            return "!";
        case 1:
            return "&&";
        case 2:
            return "||";
        default:
            return "";
    }
}
exports.get_simbolo = get_simbolo;
