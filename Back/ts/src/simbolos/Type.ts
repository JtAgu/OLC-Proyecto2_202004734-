export enum Type{
    NUMBER,
    DECIMAL,
    CHAR,
    STRING,
    BOOLEAN,
    ID,
    BREAK,
    RETURN,
    CONTINUE,
    VOID,
    error
}

export function getType(objeto: Type): string {
    switch (objeto) {
        case 0:
            return "INT"
        case 1:
            return "DOUBLE"
        case 2:
            return "CHAR"
        case 3:
            return "STRING"
        case 4:
            return "BOOLEAN"
        case 9:
            return "VOID"
        default:
            return ""
    }
}