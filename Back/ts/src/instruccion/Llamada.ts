import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/Instruccion";
import { Retorno } from "../abstract/Retorno";
import { Singleton } from "../patrondiseno/singleton";
import { Environment } from "../simbolos/Environment";
import { Type } from "../simbolos/Type";
import { Asignacion } from "./Asignacion";
import { Error } from "./Error";
import { SWITCHCASE } from "./SwitchCase";

export class LLAMADA extends Instruccion {
    constructor(
        public NomFuncion: any,
        public ListaParam: Array<Expression> | null,
        line: number,
        column: number
    ) {
        super(line, column);
    }
    public execute2(env: Environment) {
    }
    public execute(env: Environment,sn:Singleton) {
        var result: Retorno ={
            value:null,
            type:Type.error
        }
        var LP:Array<Expression>=[]
        if(env.buscar_variable(this.NomFuncion)){
            
            let Param=env.getParam_variable(this.NomFuncion);            
            let Ins=env.getIns_variable(this.NomFuncion); 
            const envFc = new Environment(env,"AMBIENTE FUNCION "+this.NomFuncion);
            
            if(Param!=null&&this.ListaParam!=null&&Ins!=null){
                console.log(Param)
                if(Param.length==this.ListaParam.length){
                    for(var i=0; i<Param.length;i++){
                            Param[i].expresion=this.ListaParam[i];
                            Param[i].execute(envFc,sn);
                        //console.log(this.ListaParam[i].execute(envFc,sn));
                    }
                    for(const Instruccion of Ins ){
                        
                        result=Instruccion.execute(envFc,sn);
                        
                        if(result!=undefined){
                            
                            if(result.type==env.getTipo_variable(this.NomFuncion)){
                                sn.addEnv(envFc);
                                //console.log("Llamada",result)
                                return result
                            }else{
                                sn.addError(new Error(" tipo de exp diferente a [" + this.NomFuncion + "]", "SEMANTICO", this.line, this.column));
                            }
                        }
                        
                    }
                    sn.addEnv(envFc);
                }else{
                    sn.addError(new Error("CANTIDAD DE PARAMETROS DISTINTA","SEMANTICO",this.line,this.column))
                }

            }else if(Ins!=null){
                for(const Instruccion of Ins ){
                    
                    result=Instruccion.execute(envFc,sn);
                    if(result!=undefined){
                        
                        if(result.type==env.getTipo_variable(this.NomFuncion)){
                            sn.addEnv(envFc);
                            return result
                        }else{
                            sn.addError(new Error(" tipo de exp diferente a [" + this.NomFuncion + "]", "SEMANTICO", this.line, this.column));
                        }
                        
                    }
                    
                }
                sn.addEnv(envFc);
            }
            
        }else{
            sn.addError(new Error(" Funcion [" + this.NomFuncion + "] inexistente", "SEMANTICO", this.line, this.column));
            return result;
        }
        return result;
    }

    public ast(s:Singleton) {
        
        const nombre_nodo=`node_${this.line}_${this.column}_`
        s.add_ast(`
        ${nombre_nodo} [label="\\<Instruccion\\>\\nLlamada funcion"];
        ${nombre_nodo}1 [label="{${this.NomFuncion}}"];
        ${nombre_nodo}2 [label="<\\Parametros\\>"];
        ${nombre_nodo}->${nombre_nodo}2;
        ${nombre_nodo}->${nombre_nodo}1;
        `)
        if(this.ListaParam!=null){
            this.ListaParam.forEach(element => {
                s.add_ast(`
                ${nombre_nodo}2->${element.ast(s)}
                `)
            })
        }
        return nombre_nodo;
        
    }
}
