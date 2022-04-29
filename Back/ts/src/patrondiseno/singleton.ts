import { Instruccion } from "../abstract/Instruccion";
import { Error } from "../instruccion/Error";
import { Environment } from "../simbolos/Environment";
import { Type ,getType} from "../simbolos/Type";

export class Singleton{


    private static instance:Singleton

    
    private message:string="";
    private ast:string="";
    private error:string="";
    private entorno:Array<any>=[];
    private consola:string="";
    private pila:Instruccion[] = [];
    private c=1;

    private constructor(){}

    public static getInstance():Singleton{
        if(!Singleton.instance){
            Singleton.instance=new Singleton();
        }
        return Singleton.instance;
    }




    public addMsg(data:any){
        this.message+=data;
    }

    public getMsg():String{
        return this.message;
    }

    public addError(data: Error) {
        console.log(Error);
        this.error +=
            "<tr>" +
            "<td>" + this.c + "</td>" +
            "<td>" + data.tipo + "</td>" +
            "<td>" + data.Lexema + "</td>" +
            "<td>" + data.line + "</td>" +
            "<td>" + data.column + "</td>" +
            "</tr>";
            this.c++;
    }

    /**
     * 
     * @returns un string con el codigo con el formato html para reportar
     */
    public get_error() {
        
        return `
        ${this.error}
        `
    }

    public clear(){
        this.message="";
        this.ast="";
        this.error="";
        this.entorno=[];
        this.consola="";
        this.pila= [];
        this.c=1;
    }

    public add_ast(data: string) {
        this.ast += data
    }
    public get_ast(): string {
        return this.ast
    }
    public add_consola(data: string) {
        this.consola += data
    }
    public get_consola(): string {
        return this.consola
    }
    /**
     * add_pila
     */
    public add_pila(data:Instruccion) {
        this.pila.push(data)
    }
    public addEnv(data:Environment){
        this.entorno.push(data);
    }
    public get_entorno():string{
        var cadena="";
        //console.log(this.entorno);
        for(const Env of this.entorno){
            
            var tablaS=Env.getEnv();
          //  console.log(tablaS);
            for(const v of tablaS){
                cadena+="<tr>\n" +
                "<td>" + v[1].id + "</td>\n" +
                "<td>" + getType(v[1].tipo) + "</td>\n" 
                if(v[1].Instrucciones!=null){
                    cadena+="<td>Funcion</td>\n"
                }else if(v[1].dim2>0){
                    cadena+="<td>Matriz</td>\n"
                }else if(v[1].dim1>0){
                    cadena+="<td>Vector</td>\n"
                }else{
                    cadena+="<td>Variable</td>\n"
                }
                
                cadena+="<td>" + Env.nombre + "</td>\n"
                +"<td>" + v[1].line + "</td>\n"
                +"<td>" + v[1].column + "</td>\n</tr>\n"
                
                
            }
        }


        return cadena;
    }
}