export enum LogicOption {
    
    /*0*/  NOT,
    /*1*/  AND,
    /*2*/  OR,
    /*3*/  error
}

export function get_simbolo(objeto: LogicOption): string {
    switch (objeto) {
        case 0:
            return "!"
        case 1:
            return "&&"
        case 2:
            return "||"
        default:
            return ""
    }
}