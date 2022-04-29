export enum RelacionalOption {
    /*0*/  IGUAL,
    /*1*/  MENOR,
    /*2*/  MAYOR,
    /*3*/  MENORIGUAL,
    /*4*/  MAYORIGUAL,
    /*5*/  DIFERENTE,
    /*6*/  error,
}

export function get_simbolo(objeto: RelacionalOption): string {
    switch (objeto) {
        case 0:
            return "=="
        case 5:
            return "!="
        case 1:
            return "\\<"
        case 3:
            return "\\<="
        case 2:
            return "\\>"
        case 4:
            return "\\>="
        default:
            return ""
    }
}