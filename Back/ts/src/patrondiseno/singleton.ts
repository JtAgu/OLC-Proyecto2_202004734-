export class Singleton{


    private static instance:Singleton

    private message:string=""

    constructor(){}

    public static getInstance():Singleton{
        if(!Singleton.instance){
            Singleton.instance=new Singleton();
        }
        return Singleton.instance;
    }

    public addMsg(data:any){
        this.message+=data
    }

    public getMsg():String{
        return this.message
    }


}