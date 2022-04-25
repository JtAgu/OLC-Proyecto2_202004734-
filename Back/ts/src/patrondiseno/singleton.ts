import { Error } from "../instruccion/Error";

export class Singleton{


    private static instance:Singleton

    
    private message:Array<any>=["",Array,""]

    constructor(){

        var s:Array<Error>=[]
        this.message[1]=s;
    }

    public static getInstance():Singleton{
        if(!Singleton.instance){
            Singleton.instance=new Singleton();
        }
        return Singleton.instance;
    }

    public addMsg(data:any){
        this.message[0]+=data
    }

    public getMsg():String{
        return this.message[0]
    }

    public getError():String{
        return this.message[1]
    }

    public addError(data:Error){
        this.message[1].push(data)
    }


}