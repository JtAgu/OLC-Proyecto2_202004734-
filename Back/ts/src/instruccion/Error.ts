export class Error {
  
  constructor(
    public Lexema: any,
    public tipo:string,
    public line:number,
    public column:number,
    ){}

}