%lex

%options case-insensitive
%%


[0-9]+"."[0-9]+      {
                console.log("reconoci el token <decimal> con lexema : "+yytext);
                return 'decimal';
                }

[0-9]+      {
                console.log("reconoci el token <entero> con lexema : "+yytext);
                return 'entero';
            }

"//"[^\n]*  {
                console.log("reconoci el token <comentario> con lexema : "+yytext);
            }

"/*"[^"*/"]*"*/"    {
                    console.log("reconoci el token <comentarioMulti> con lexema : "+yytext);
                }



","         {
                console.log("reconoci el token <coma> con lexema : "+yytext);
                return 'coma';
            }
"if"         {
                console.log("reconoci el token <if> con lexema : "+yytext);
                return 'if';
            }

"else"         {
                console.log("reconoci el token <else> con lexema : "+yytext);
                return 'else';
            }

"while"         {
                console.log("reconoci el token <while> con lexema : "+yytext);
                return 'while';
            }

"for"         {
                console.log("reconoci el token <for> con lexema : "+yytext);
                return 'for';
            }

"do"         {
                console.log("reconoci el token <do> con lexema : "+yytext);
                return 'do';
            }

"break"         {
                console.log("reconoci el token <break> con lexema : "+yytext);
                return 'break';
            }

"continue"         {
                console.log("reconoci el token <continue> con lexema : "+yytext);
                return 'continue';
            }

"void"         {
                console.log("reconoci el token <void> con lexema : "+yytext);
                return 'void';
            }


"switch"         {
                console.log("reconoci el token <switch> con lexema : "+yytext);
                return 'switch';
            }

"case"         {
                console.log("reconoci el token <case> con lexema : "+yytext);
                return 'case';
            }

"default"         {
                console.log("reconoci el token <default> con lexema : "+yytext);
                return 'default';
            }


"Println"         {
                console.log("reconoci el token <Println> con lexema : "+yytext);
                return 'Println';
            }


"Print"         {
                console.log("reconoci el token <Print> con lexema : "+yytext);
                return 'Print';
            }

"toLower"         {
                console.log("reconoci el token <toLower> con lexema : "+yytext);
                return 'toLower';
            }

"toUpper"         {
                console.log("reconoci el token <toUpper> con lexema : "+yytext);
                return 'toUpper';
            }



"round"         {
                console.log("reconoci el token <round> con lexema : "+yytext);
                return 'round';
            }

"length"         {
                console.log("reconoci el token <length> con lexema : "+yytext);
                return 'length';
            }

"typeof"         {
                console.log("reconoci el token <typeof> con lexema : "+yytext);
                return 'typeof';
            }



"toString"         {
                console.log("reconoci el token <toString> con lexema : "+yytext);
                return 'ToString';
            }


"toCharArray"         {
                console.log("reconoci el token <toCharArray> con lexema : "+yytext);
                return 'toCharArray';
            }

"run"         {
                console.log("reconoci el token <run> con lexema : "+yytext);
                return 'run';
               }


"new"         {
                console.log("reconoci el token <new> con lexema : "+yytext);
                return 'new';
               }


"int"         {
                console.log("reconoci el token <int> con lexema : "+yytext);
                return 'int';
               }

"double"         {
                console.log("reconoci el token <run> con lexema : "+yytext);
                return 'double';
               }

"char"         {
                console.log("reconoci el token <run> con lexema : "+yytext);
                return 'char';
               }

"boolean"      {
                console.log("reconoci el token <run> con lexema : "+yytext);
                return 'boolean';
               }

"string"        {
                console.log("reconoci el token <run> con lexema : "+yytext);
                return 'String';
               }

"true"        {
                console.log("reconoci el token <true> con lexema : "+yytext);
                return 'True';
               }


"false"        {
                console.log("reconoci el token <false> con lexema : "+yytext);
                return 'False';
               }

":"         {
                console.log("reconoci el token <DosPuntos> con lexema : "+yytext);
                return 'DosPuntos';
            }

";"         {
                console.log("reconoci el token <PuntoComa> con lexema : "+yytext);
                return 'PuntoComa';
            }

"("         {
                console.log("reconoci el token <ParentesisA> con lexema : "+yytext);
                return 'ParentesisA';
            }

")"         {
                console.log("reconoci el token <ParentesisC> con lexema : "+yytext);
                return 'ParentesisC';
            }

"["         {
                console.log("reconoci el token <CorcheteA> con lexema : "+yytext);
                return 'CorcheteA';
            }

"]"         {
                console.log("reconoci el token <CorcheteC> con lexema : "+yytext);
                return 'CorcheteC';
            }

"{"         {
                console.log("reconoci el token <LlaveA> con lexema : "+yytext);
                return 'LlaveA';
            }

"}"         {
                console.log("reconoci el token <LlaveC> con lexema : "+yytext);
                return 'LlaveC';
            }

"+"         {
                console.log("reconoci el token <mas> con lexema : "+yytext);
                return 'mas';
            }

"-"         {
                console.log("reconoci el token <menos> con lexema : "+yytext);
                return 'menos';
            }

"*"         {
                console.log("reconoci el token <multiplicacion> con lexema : "+yytext);
                return 'multiplicacion';
            }

"/"         {
                console.log("reconoci el token <division> con lexema : "+yytext);
                return 'division';
            }

"^"         {
                console.log("reconoci el token <potencia> con lexema : "+yytext);
                return 'potencia';
            }

"%"         {
                console.log("reconoci el token <modulo> con lexema : "+yytext);
                return 'modulo';
            }


"=="         {
                console.log("reconoci el token <igualIf> con lexema : "+yytext);
                return 'igualIf';
            }

"="         {
                console.log("reconoci el token <igual> con lexema : "+yytext);
                return 'igual';
            }

"!="         {
                console.log("reconoci el token <desIgual> con lexema : "+yytext);
                return 'desIgual';
            }

"<"         {
                console.log("reconoci el token <menor> con lexema : "+yytext);
                return 'menor';
            }

"<="         {
                console.log("reconoci el token <menorIgual> con lexema : "+yytext);
                return 'menorIgual';
            }

">"         {
                console.log("reconoci el token <mayor> con lexema : "+yytext);
                return 'mayor';
            }

">="         {
                console.log("reconoci el token <mayorIgual> con lexema : "+yytext);
                return 'mayorIgual';
            }

"?"         {
                console.log("reconoci el token <Interrogacion> con lexema : "+yytext);
                return 'InterrogacionC';
            }

"||"         {
                console.log("reconoci el token <or> con lexema : "+yytext);
                return 'or';
            }

"&&"         {
                console.log("reconoci el token <and> con lexema : "+yytext);
                return 'and';
            }

"!"         {
                console.log("reconoci el token <not> con lexema : "+yytext);
                return 'not';
            }

\'[^\']*\'  {
                                                console.log("reconoci el token <cadena> con lexema : "+yytext);
                                                return 'cadena';
                                            }

\"[^\"]*\" {
                                                console.log("reconoci el token <cadena> con lexema : "+yytext);
                                                return 'cadena';
                                            }
[a-zA-Z]("_"|[0-9]|[a-zA-Z])*   {
                            console.log("reconoci el token <id> con lexema : "+yytext);
                            return 'id';
                            }



//SE IGNORAN CARACTERES ESPECIALES

\t     {}
\r     {}
\n     {}
\s     {}


<<EOF>>             return 'EOF';

.           {
                console.log('Este es un error lexico : '+yytext+", en la linea : "+yylloc.first_line+", columna : "+yylloc.fisrt_column);
            }

/lex

%left 'or'
%left 'and'
%right 'not'
%left 'igualIf' 'desIgual' 'mayor' 'mayorIgual' 'menor' 'menorIgual'
%left 'mas' 'menos'
%left 'division' 'multiplicacion'
%left 'potencia'
%right InterrogacionC


%start INIT

%%

INIT
    : INSTRUCCION EOF{console.log("termine analizar, recursiva por la derecha c:");}
;

INSTRUCCION
    : INSTRUCCIONES INSTRUCCION
    |INSTRUCCIONES
;

INSTRUCCIONES
    : WHILE
    | DO_WHILE
    | FOR
    | IF
    | ELSE_IF
    | ELSE
    | SWITCH
    | PRINT
    | PRINTLN
    | METODO
    | LLAMAR_METODO
    | FUNCION
    | LLAMAR_FUNCION
    | PRIMITIVOS    
    | VECTORES
    | BREAK
    | CONTINUE
    | RETURN
;


RUN
    : 'run' 'ParentesisA' 'ParentesisC' 'PuntoComa'
;



FUNCION
    : 'id' 'ParentesisA' PARAMETROS 'ParentesisC' 'DosPuntos' TIPO_DATO 'LlaveA' INSTRUCCION 'LlaveC'
;

LLAMAR_FUNCION_METODO
    : 'id' 'ParentesisA' PARAMETROS 'ParentesisC'
;

METODO
    : 'id' 'ParentesisA' PARAMETROS 'ParentesisC' 'DosPuntos' 'void' 'LlaveA' INSTRUCCION 'LlaveC'
;



PARAMETROS
    : PARAMETROS 'coma' TIPO_DATO 'id'
    | TIPO_DATO 'id'
;


WHILE
    : 'while' 'ParentesisA' EXPRESION_B 'ParentesisC' 'LlaveA' INSTRUCCION 'LlaveC'
;

DO_WHILE
    :  'do' 'LlaveA' INSTRUCCION 'LlaveC' 'while' 'ParentesisA' EXPRESION_B 'ParentesisC'
;



FOR
    : 'for' 'ParentesisA' 'ParentesisC' 'LlaveA' INSTRUCCION 'LlaveC'
;






IF
    : 'if' 'ParentesisA' EXPRESION_B 'ParentesisC' 'LlaveA' INSTRUCCION 'LlaveC'
;


ELSE_IF
    : 'else' 'if' 'ParentesisA' EXPRESION_B 'ParentesisC' 'LlaveA' INSTRUCCION 'LlaveC'
;

ELSE
    : 'else' 'LlaveA' INSTRUCCION 'LlaveC'
;

EXPRESION_B
    :EXPRESION_B 'mayor' EXPRESION_B
    | EXPRESION_B 'menor' EXPRESION_B
    | EXPRESION_B 'mayorIgual' EXPRESION_B
    | EXPRESION_B 'menorIgual' EXPRESION_B
    | EXPRESION_B 'igualIf' EXPRESION_B
    | EXPRESION_B 'mas' EXPRESION_B
    | EXPRESION_B 'mas' 'mas' EXPRESION_B
    | EXPRESION_B 'menos' 'menos' EXPRESION_B
    | EXPRESION_B 'menos' EXPRESION_B
    | EXPRESION_B 'division' EXPRESION_B
    | EXPRESION_B 'multiplicacion' EXPRESION_B
    | EXPRESION_B 'potencia' EXPRESION_B
    | VALOR
;




SWITCH
    : 'switch' 'ParentesisA' EXPRESION 'ParentesisC' 'LlaveA'  'LlaveC'
;

TIPO_SW
    : LISTAS_CASE 'default' 'DosPuntos' INSTRUCCION 
    | LISTAS_CASE
    | 'default' 'PuntoComa' INSTRUCCION 
;

LISTAS_CASE
    : LISTAS_CASE 'case' EXPRESION 'DosPuntos' INSTRUCCION 
    | LISTAS_CASE 'case' EXPRESION 'DosPuntos' INSTRUCCION 
    | 'case' EXPRESION 'DosPuntos' INSTRUCCION 
    | 'case' EXPRESION 'DosPuntos' INSTRUCCION 
;





PRINT
    : 'Print' 'ParentesisA' EXPRESION_B 'ParentesisC' 'PuntoComa'
;

PRINTLN
    : 'Println' 'ParentesisA' EXPRESION_B 'ParentesisC' 'PuntoComa'
;

EXPRESION_IMPRESION
    : EXPRESION_IMPRESION 'mas' EXPRESION_IMPRESION
    | 'cadena'
    | 'decimal'
    | 'entero'
;





PRIMITIVOS
    :  TIPO_DATO Id_DECLARACION 'igual' EXPRESION 'PuntoComa'
    | TIPO_DATO Id_DECLARACION 'igual' 'ParentesisA' TIPO_DATO 'ParentesisC' EXPRESION 'PuntoComa'
    | Id_DECLARACION 'igual' EXPRESION 'PuntoComa'
    | Id_DECLARACION 'igual' 'ParentesisA' TIPO_DATO 'ParentesisC' EXPRESION 'PuntoComa' 
    | TIPO_DATO Id_DECLARACION 'PuntoComa'
    | 'id' 'mas' 'mas' 'PuntoComa'
    | 'id' 'menos' 'menos' 'PuntoComa'
;



VECTORES
    :  TIPO_DATO 'id' 'CorcheteA' 'CorcheteC' 'igual' DECLARO_VECTOR 'PuntoComa' 
    | TIPO_DATO 'id' 'CorcheteA' 'CorcheteC' 'CorcheteA' 'CorcheteC' 'igual' DECLARO_VECTOR 'PuntoComa' 
    | POSICION_VECTOR 'igual' EXPRESION
;

DECLARO_VECTOR
    : 'new' TIPO_DATO 'CorcheteA' EXPRESION 'CorcheteC'
    | 'new' TIPO_DATO 'CorcheteA' EXPRESION 'CorcheteC' 'CorcheteA' EXPRESION 'CorcheteC'
    | 'CorcheteA' 'CorcheteA' VECTOR_LISTA 'CorcheteC' 'CorcheteC'
    | 'CorcheteA' 'CorcheteA' VECTOR_LISTA 'CorcheteC' 'coma' 'CorcheteA' VECTOR_LISTA 'CorcheteC' 'CorcheteC'
;

VECTOR_LISTA
    : VECTOR_LISTA 'coma' EXPRESION
    | EXPRESION
;

POSICION_VECTOR
    : 'id' 'CorcheteA' EXPRESION 'CorcheteC'
    | 'id' 'CorcheteA' EXPRESION 'CorcheteC' 'CorcheteA' EXPRESION 'CorcheteC'
;



Id_DECLARACION
    : Id_DECLARACION 'coma' 'id'
    | id
;



EXPRESION
    : EXPRESION 'mas' EXPRESION
    | EXPRESION 'mas' 'mas' EXPRESION
    | EXPRESION 'menos' 'menos' EXPRESION
    | EXPRESION 'menos' EXPRESION
    | EXPRESION 'division' EXPRESION
    | EXPRESION 'multiplicacion' EXPRESION
    | EXPRESION 'potencia' EXPRESION
    | EXPRESION 'mayor' EXPRESION 'InterrogacionC' EXPRESION_B 'DosPuntos' EXPRESION_B
    | EXPRESION 'menor' EXPRESION 'InterrogacionC' EXPRESION_B 'DosPuntos' EXPRESION_B
    | EXPRESION 'mayorIgual' EXPRESION 'InterrogacionC' EXPRESION_B 'DosPuntos' EXPRESION_B
    | EXPRESION 'menorIgual' EXPRESION 'InterrogacionC' EXPRESION_B 'DosPuntos' EXPRESION_B
    | EXPRESION 'igualIf' EXPRESION 'InterrogacionC' EXPRESION_B 'DosPuntos' EXPRESION_B
    | VALOR
    | ROUND
;


ROUND
    : 'round' 'ParentesisA' VALOR 'ParentesisC'
;



LENGTH
    : 'length' 'ParentesisA' VALOR 'ParentesisC'
;




TYPEOFF
    : 'typeof' 'ParentesisA' VALOR 'ParentesisC'
;




TO_STRING
    : 'ToString' 'ParentesisA' VALOR 'ParentesisC'
;



TOCHAR_ARRAY
    : 'toCharArray' 'ParentesisA' VALOR 'ParentesisC'
;






VALOR   
    :  POSICION_VECTOR
    |'True'
    |'False'
    |'id'
    |'entero'
    |'decimal'
    |'cadena'
    | LLAMAR_FUNCION_METODO
;


TIPO_DATO
    : 'int'
    |'double'
    |'char'
    |'String'
    |'boolean'
;

RETURN
    : 'return' EXPRESION_B 'PuntoComa'
    | 'return' 'PuntoComa'
;

BREAK
    : 'break' 'PuntoComa'
;

CONTINUE
    : 'continue' 'PuntoComa'
;






