import { Instruccion } from "../abstract/Instruccion";
import { Declaracion } from "../instruccion/Declaracion";
import { Type } from "./Type";

export class simbolos{
    constructor(
        public value:any,
        public id: string,
        public tipo: Type,
        public line: number,
        public column: number,
        public Dimension:Number,
        public dim1:Number,
        public dim2:Number,
        public Instrucciones: Array<Instruccion>|null,
        public Parametros: Array<Declaracion>|null
    ){}
}