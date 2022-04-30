%{
    const {Declaracion} = require('../instruccion/Declaracion');
    const {DeclaracionVacio} = require('../instruccion/DeclaracionVacio');
    const {DeclaracionTernario} = require('../instruccion/DeclaracionTernario');
    const {DeclaracionVectorNew} = require('../instruccion/DeclaracionVectorNew');
    const {DeclaracionVectorLista} = require('../instruccion/DeclaracionVectorLista');
    const {DeclaracionMatrizNew} = require('../instruccion/DeclaracionMatrizNew');
    const {DeclaracionMatrizLista} = require('../instruccion/DeclaracionMatrizLista');
    

    const {Error} = require('../Instruccion/Error');
    const {Asignacion} = require('../Instruccion/Asignacion');
    const {AsignacionTernario} = require('../Instruccion/AsignacionTernario');
    const {AsignacionVector} = require('../instruccion/AsignacionVector');
    const {AsignacionMatriz} = require('../instruccion/AsignacionMatriz');
    

    const {Type} = require('../simbolos/Type');
    const {Arithmetic} = require('../expression/aritmeticas');
    const {relacional} = require('../expression/relacionales');
    const {logic} = require('../expression/logic');

    const {GetId} = require('../expression/GetId');
    const {GetId2} = require('../expression/GetId2');
    const {GetVector} = require('../expression/GetVector');
    const {GetMatriz} = require('../expression/GetMatriz');

    const {ArithmeticOption} = require('../expression/aritmeticOption');
    const {RelacionalOption} = require('../expression/relacionalOption');
    const {LogicOption} = require('../expression/logicOption');
    const {Literal} = require('../expression/literal');
    
    const {RUN} = require('../Instruccion/Run');
    const {LLAMADA} = require('../Instruccion/Llamada');
    const {Funcion} = require('../Instruccion/Funcion');
    const {TYPEOFF} = require('../Instruccion/TypeOFF');
    const {TO_STRING} = require('../Instruccion/To_String');
    const {RETURN} = require('../Instruccion/Return');
    const {ROUND} = require('../Instruccion/Round');
    const {LENGTH} = require('../Instruccion/Length');
    const {TO_UPPER} = require('../Instruccion/To_Upper');
    const {TO_LOWER} = require('../Instruccion/To_Lower');
    const {BREAK} = require('../Instruccion/BREAK');
    const {CONTINUE} = require('../Instruccion/CONTINUE');
    const {FOR} = require('../Instruccion/FOR');
    const {DOWHILE} = require('../Instruccion/DoWhile');
    const {WHILE} = require('../Instruccion/While');
    const {SWITCHCASE} = require('../Instruccion/SwitchCase');
    const {SWITCH} = require('../Instruccion/switch');
    const {PrintLn} = require('../Instruccion/println');
    const {Print} = require('../Instruccion/print');
    const {Casteo} = require('../Instruccion/Casteo');
    const {CasteoAsig} = require('../Instruccion/CasteoAsig');
    const {Incremento} = require('../Instruccion/Incremento');
    const {Decremento} = require('../Instruccion/decremento');
    const {IF} = require('../Instruccion/IF');
    const {ELSE} = require('../Instruccion/ELSE');
    var Errores=[];
    var Retornos=[];
%}

%lex

%options case-insensitive
%%




"//"[^\n]*  {
                console.log("reconoci el token <comentario> con lexema : "+yytext);
            }

[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]     {
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

"return"         {
                console.log("reconoci el token <return> con lexema : "+yytext);
                return 'return';
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
                console.log("reconoci el token <double> con lexema : "+yytext);
                return 'double';
               }

"char"         {
                console.log("reconoci el token <char> con lexema : "+yytext);
                return 'char';
               }

"boolean"      {
                console.log("reconoci el token <boolean> con lexema : "+yytext);
                return 'boolean';
               }

"string"        {
                console.log("reconoci el token <string> con lexema : "+yytext);
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
"!="         {
                console.log("reconoci el token <diferente> con lexema : "+yytext);
                return 'diferente';
            }

"<="         {
                console.log("reconoci el token <menorIgual> con lexema : "+yytext);
                return 'menorIgual';
            }

">="         {
                console.log("reconoci el token <mayorIgual> con lexema : "+yytext);
                return 'mayorIgual';
            }

"="         {
                console.log("reconoci el token <igual> con lexema : "+yytext);
                return 'igual';
            }


"<"         {
                console.log("reconoci el token <menor> con lexema : "+yytext);
                return 'menor';
            }



">"         {
                console.log("reconoci el token <mayor> con lexema : "+yytext);
                return 'mayor';
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



\'[^\']?\'  {
                console.log("reconoci el token <char> con lexema : "+yytext);
                return 'ValChar';
            }

\"[^\"]*\" {
                console.log("reconoci el token <cadena> con lexema : "+yytext);
                return 'cadena';
            }

[0-9]+"."[0-9]+      {
                console.log("reconoci el token <decimal> con lexema : "+yytext);
                return 'decimal';
                }

[0-9]+      {
                console.log("reconoci el token <entero> con lexema : "+yytext);
                return 'entero';
            }

([a-zA-ZñÑ])[a-zA-ZñÑ0-9_]* {
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
                console.log('Este es un error lexico : '+yytext+", en la linea : "+yylloc.first_line+", columna : "+yylloc.first_column);
                Errores.push(new Error("EL CARACTER "+yytext+" no forma parte del lenguaje","LEXICO",yylloc.first_line,yylloc.first_column));
            }

/lex

%right InterrogacionC
%left 'or'
%left 'and'
%right 'not'
%left 'igualIf' 'diferente' 'mayor' 'mayorIgual' 'menor' 'menorIgual'
%left 'mas' 'menos'
%left 'division' 'multiplicacion' 'modulo'
% 'potencia'
%right UMENOS



%start INIT

%%

INIT
    : INSTRUCCION EOF{console.log("termine analizar, recursiva por la derecha c:");Retornos.push($1);Retornos.push(Errores);return Retornos;}
;

INSTRUCCION
    : INSTRUCCION INSTRUCCIONES {$1.push($2); $$=$1;}
    |INSTRUCCIONES {$$=[$1]}
;

INSTRUCCIONES
    : DECLARACION           {$$=$1}
    | ASIGNACION            {$$=$1}
    | PRINT                 {$$=$1}
    | PRINT_LN              {$$=$1}
    | DECLARACION_VACIO     {$$=$1}
    | CASTEO_D              {$$=$1}
    | INCREMENTO_DECREMENTO 'PuntoComa'{$$=$1}
    | IF                    {$$=$1}
    | SWITCH                {$$=$1}
    | WHILE                 {$$=$1}
    | DO_WHILE              {$$=$1}
    | FOR                   {$$=$1}
    | BREAK                 {$$=$1}
    | CONTINUE              {$$=$1}
    | RETURN                {$$=$1}
    | LLAMADA 'PuntoComa'   {$$=$1}
    | METODO_FUNCION        {$$=$1}
    | RUN                   {$$=$1}
    | error                 {Errores.push(new Error(" CARACTER "+yytext+" no era el esperado","SINTACTICO",@1.first_line,@1.first_column));}
;

METODO_FUNCION
    : 'id' 'ParentesisA' PARAMETROS 'ParentesisC' 'DosPuntos' TIPO_DATO 'LlaveA' INSTRUCCION 'LlaveC' {$$=new Funcion($1,$3,$8,$6,@1.first_line,@1.first_column);}
    | 'id' 'ParentesisA' 'ParentesisC' 'DosPuntos' TIPO_DATO 'LlaveA' INSTRUCCION 'LlaveC'            {$$=new Funcion($1,null,$7,$5,@1.first_line,@1.first_column);}
;

PARAMETROS
    : PARAMETROS 'coma' DECLARACION_VACIO  {$1.push($3); $$=$1;}
    | DECLARACION_VACIO                    {$$=[$1]}
;

DECLARACION_VACIO
    : TIPO_DATO 'id' {$$= new Declaracion([$2],$1,null,@1.first_line,@1.first_column);}
;

LLAMADA
    : 'id' 'ParentesisA' PARAMETROS_LLAMADA 'ParentesisC'   {$$=new LLAMADA($1,$3,@1.first_line,@1.first_column);}
    | 'id' 'ParentesisA' 'ParentesisC'                      {$$=new LLAMADA($1,null,@1.first_line,@1.first_column);}
;

PARAMETROS_LLAMADA
    : PARAMETROS_LLAMADA 'coma' EXPRESION   {$1.push($3); $$=$1;}
    | EXPRESION                             {$$=[$1]}
;

I_SWITCH
    : I_SWITCH INS_SWITCH {$1.push($2); $$=$1;}
    |INS_SWITCH {$$=[$1]}
;

INS_SWITCH
    : DECLARACION           {$$=$1}
    | ASIGNACION            {$$=$1}
    | PRINT                 {$$=$1}
    | PRINT_LN              {$$=$1}
    | DECLARACION_VACIO     {$$=$1}
    | CASTEO_D              {$$=$1}
    | INCREMENTO_DECREMENTO 'PuntoComa' {$$=$1}
    | IF                    {$$=$1}    
    | SWITCH                {$$=$1}
    | FOR                   {$$=$1}
    | RETURN                {$$=$1}
    | error                 {Errores.push(new Error(" CARACTER "+yytext+" no era el esperado","SINTACTICO",@1.first_line,@1.first_column));}
;

FOR
    : 'for' 'ParentesisA' PARAMETRO1 EXPRESION 'PuntoComa' PARAMETRO2 'ParentesisC' 'LlaveA' INSTRUCCION 'LlaveC'   {$$=new FOR($3,$4,$6,$9,@1.first_line,@1.first_column)}
    | 'for' 'ParentesisA' PARAMETRO1 EXPRESION 'PuntoComa' PARAMETRO2 'ParentesisC' 'LlaveA'  'LlaveC'              {$$=new FOR($3,$4,$6,null,@1.first_line,@1.first_column)}
;

PARAMETRO1
    : DECLARACION   {$$=$1}
    | ASIGNACION    {$$=$1}
;

PARAMETRO2
    : ASIGNACION_FOR        {$$=$1}
    | INCREMENTO_DECREMENTO {$$=$1}
;


DO_WHILE
    : 'do' 'LlaveA' INSTRUCCION 'LlaveC' 'while' 'ParentesisA' EXPRESION 'ParentesisC' 'PuntoComa' {$$=new DOWHILE($3,$7,@1.first_line,@1.first_column)}
;


WHILE
    : 'while' 'ParentesisA' EXPRESION 'ParentesisC' 'LlaveA' INSTRUCCION 'LlaveC' {$$=new WHILE($3,$6,@1.first_line,@1.first_column)}
;


CASTEO_D
    : TIPO_DATO ID_DECLARACION 'igual' 'ParentesisA' TIPO_DATO 'ParentesisC' EXPRESION 'PuntoComa' {$$=new Casteo($2,$1,$7,$5,@1.first_line,@1.first_column)}
    | 'id' 'igual' 'ParentesisA' TIPO_DATO 'ParentesisC' EXPRESION 'PuntoComa' {$$=new CasteoAsig($1,$6,$4,@1.first_line,@1.first_column)}
;


DECLARACION
    : TIPO_DATO ID_DECLARACION 'igual' EXPRESION 'PuntoComa' {$$= new Declaracion($2,$1,$4,@1.first_line,@1.first_column);}
    | TIPO_DATO ID_DECLARACION 'PuntoComa' {$$= new DeclaracionVacio($2,$1,@1.first_line,@1.first_column);}
    | TIPO_DATO ID_DECLARACION 'igual' EXPRESION 'InterrogacionC' EXPRESION 'DosPuntos' EXPRESION 'PuntoComa' {$$= new DeclaracionTernario($2,$1,$4,$6,$8,@1.first_line,@1.first_column);}

    | TIPO_DATO 'id' 'CorcheteA' 'CorcheteC' 'igual' 'new' TIPO_DATO 'CorcheteA' EXPRESION 'CorcheteC'  'PuntoComa' {$$= new DeclaracionVectorNew($2,$1,$9,$7,@1.first_line,@1.first_column);}
    | TIPO_DATO 'id' 'CorcheteA' 'CorcheteC' 'CorcheteA' 'CorcheteC' 'igual' 'new' TIPO_DATO 'CorcheteA' EXPRESION 'CorcheteC' 'CorcheteA' EXPRESION 'CorcheteC' 'PuntoComa' {$$= new DeclaracionMatrizNew($2,$1,$11,$14,$9,@1.first_line,@1.first_column);}

    | TIPO_DATO 'id' 'CorcheteA' 'CorcheteC' 'igual' 'CorcheteA' LISTA_VALORES 'CorcheteC' 'PuntoComa' {$$= new DeclaracionVectorLista($2,$1,$7,null,@1.first_line,@1.first_column);}
    | TIPO_DATO 'id' 'CorcheteA' 'CorcheteC' 'igual' 'toCharArray' 'ParentesisA' VALOR 'ParentesisC' 'PuntoComa' {$$= new DeclaracionVectorLista($2,$1,null,$8,@1.first_line,@1.first_column);}
    | TIPO_DATO 'id' 'CorcheteA' 'CorcheteC' 'CorcheteA' 'CorcheteC' 'igual' 'CorcheteA' LISTA_FILAS 'CorcheteC' 'PuntoComa' {$$= new DeclaracionMatrizLista($2,$1,$9,@1.first_line,@1.first_column);}
;

LISTA_FILAS
    : LISTA_FILAS 'coma' 'CorcheteA' LISTA_VALORES 'CorcheteC' {$1.push($4); $$=$1;}
    | 'CorcheteA' LISTA_VALORES 'CorcheteC' {$$=[$2]}
;

LISTA_VALORES
    : LISTA_VALORES 'coma' VALOR {$1.push($3); $$=$1;}
    | VALOR {$$=[$1]}
;




ID_DECLARACION
    : ID_DECLARACION 'coma' 'id' {$1.push($3); $$=$1;}
    | 'id' {$$=[$1]}
;

ASIGNACION
    : 'id' 'igual'  EXPRESION  'PuntoComa' {$$= new Asignacion($1,$3, @1.first_line, @1.first_column)}
    | 'id' 'igual' EXPRESION 'InterrogacionC' EXPRESION 'DosPuntos' EXPRESION 'PuntoComa' {$$= new AsignacionTernario($1,$3,$5,$7,@1.first_line,@1.first_column);}
    | 'id' 'CorcheteA' EXPRESION 'CorcheteC' 'igual'  EXPRESION  'PuntoComa' {$$= new AsignacionVector($1,$3,$6, @1.first_line, @1.first_column)}
    | 'id' 'CorcheteA' EXPRESION 'CorcheteC' 'CorcheteA' EXPRESION 'CorcheteC' 'igual'  EXPRESION  'PuntoComa' {$$= new AsignacionMatriz($1,$3,$6,$9 , @1.first_line, @1.first_column)}
;

ASIGNACION_FOR
    : 'id' 'igual'  EXPRESION   {$$= new Asignacion($1,$3, @1.first_line, @1.first_column)}
    | 'id' 'igual' EXPRESION 'InterrogacionC' EXPRESION 'DosPuntos' EXPRESION  {$$= new AsignacionTernario($1,$3,$5,$7,@1.first_line,@1.first_column);}
    | 'id' 'CorcheteA' EXPRESION 'CorcheteC' 'igual'  EXPRESION   {$$= new AsignacionVector($1,$3,$6, @1.first_line, @1.first_column)}
    | 'id' 'CorcheteA' EXPRESION 'CorcheteC' 'CorcheteA' EXPRESION 'CorcheteC' 'igual'  EXPRESION   {$$= new AsignacionMatriz($1,$3,$6,$9 , @1.first_line, @1.first_column)}
;

IF
    : 'if' 'ParentesisA' EXPRESION 'ParentesisC' 'LlaveA' INSTRUCCION 'LlaveC' 'else' IF{$$= new IF($3,$6,$9, @1.first_line, @1.first_column)}
    | 'if' 'ParentesisA' EXPRESION 'ParentesisC' 'LlaveA' 'LlaveC' 'else' IF            {$$= new IF($3,null,$8, @1.first_line, @1.first_column)}
    | 'if' 'ParentesisA' EXPRESION 'ParentesisC' 'LlaveA' INSTRUCCION 'LlaveC' ELSE     {$$= new IF($3,$6,$8, @1.first_line, @1.first_column)}
    | 'if' 'ParentesisA' EXPRESION 'ParentesisC' 'LlaveA' 'LlaveC' ELSE                 {$$= new IF($3,null,$7, @1.first_line, @1.first_column)}
    | 'if' 'ParentesisA' EXPRESION 'ParentesisC' 'LlaveA' INSTRUCCION 'LlaveC'          {$$= new IF($3,$6,null, @1.first_line, @1.first_column)}
    | 'if' 'ParentesisA' EXPRESION 'ParentesisC' 'LlaveA' 'LlaveC'                      {$$= new IF($3,null,null, @1.first_line, @1.first_column)}
;

ELSE
    : 'else' 'LlaveA' INSTRUCCION 'LlaveC'  {$$=new ELSE($3, @1.first_line, @1.first_column)}
    | 'else' 'LlaveA' 'LlaveC'              {$$=new ELSE(null, @1.first_line, @1.first_column)}
;

SWITCH
    : 'switch' 'ParentesisA' EXPRESION 'ParentesisC' 'LlaveA' TIPO_SW DEFAULT 'LlaveC'  {$$=new SWITCH($3,$6,$7 ,@1.first_line, @1.first_column)}
    | 'switch' 'ParentesisA' EXPRESION 'ParentesisC' 'LlaveA' TIPO_SW 'LlaveC'          {$$=new SWITCH($3,$6,null,@1.first_line, @1.first_column)}
    | 'switch' 'ParentesisA' EXPRESION 'ParentesisC' 'LlaveA' DEFAULT 'LlaveC'          {$$=new SWITCH($3,null,$6 ,@1.first_line, @1.first_column)}
;

TIPO_SW
    : TIPO_SW  'case' EXPRESION 'DosPuntos' I_SWITCH 'break' 'PuntoComa'     {$1.push(new SWITCHCASE($3,$5,$6,@2.first_line, @2.first_column)); $$=$1;}
    | TIPO_SW  'case' EXPRESION 'DosPuntos' 'break' 'PuntoComa'                 {$1.push(new SWITCHCASE($3,$5,$6,@2.first_line, @2.first_column)); $$=$1;}

    | TIPO_SW 'case' EXPRESION 'DosPuntos' I_SWITCH                          {$1.push(new SWITCHCASE($3,$5,null,@2.first_line, @2.first_column)); $$=$1;}
    | TIPO_SW 'case' EXPRESION 'DosPuntos'                                      {$1.push(new SWITCHCASE($3,null,null,@2.first_line, @2.first_column)); $$=$1;}

    | 'case' EXPRESION 'DosPuntos' I_SWITCH                                  {$$=[new SWITCHCASE($2,$4,null,@1.first_line, @1.first_column)]}
    | 'case' EXPRESION 'DosPuntos'                                              {$$=[new SWITCHCASE($2,null,null,@1.first_line, @1.first_column)]}

    | 'case' EXPRESION 'DosPuntos' I_SWITCH 'break' 'PuntoComa'              {$$=[new SWITCHCASE($2,$4,$5,@1.first_line, @1.first_column)]}
    | 'case' EXPRESION 'DosPuntos' 'break' 'PuntoComa'                          {$$=[new SWITCHCASE($2,null,$5,@1.first_line, @1.first_column)]}
;

DEFAULT
    : 'default' 'DosPuntos' INSTRUCCION 'break' 'PuntoComa'                     {$$=$3;}
    | 'default' 'DosPuntos' 'break' 'PuntoComa'                                 {$$=null;}
;


INCREMENTO_DECREMENTO
    : 'id' 'mas' 'mas'                                                                           {$$= new Incremento($1,null,null, @2.first_line, @2.first_column)}
    | 'id' 'menos' 'menos'                                                                       {$$= new Decremento($1,null ,null,@2.first_line, @2.first_column)}
    | 'id' 'CorcheteA' EXPRESION 'CorcheteC' 'mas' 'mas'                                         {$$= new Incremento($1,$3,null, @5.first_line, @5.first_column)}
    | 'id' 'CorcheteA' EXPRESION 'CorcheteC' 'menos' 'menos'                                     {$$= new Decremento($1,$3,null, @5.first_line, @5.first_column)}
    | 'id' 'CorcheteA' EXPRESION 'CorcheteC' 'CorcheteA' EXPRESION 'CorcheteC' 'mas' 'mas'       {$$= new Incremento($1,$3,$6, @8.first_line, @8.first_column)}
    | 'id' 'CorcheteA' EXPRESION 'CorcheteC' 'CorcheteA' EXPRESION 'CorcheteC' 'menos' 'menos'   {$$= new Decremento($1,$3,$6, @8.first_line, @8.first_column)}
;

PRINT_LN
    : 'Println' 'ParentesisA' EXPRESION 'ParentesisC' 'PuntoComa'  {$$= new PrintLn($3, @1.first_line, @1.first_column)}
;



PRINT
    : 'Print' 'ParentesisA' EXPRESION 'ParentesisC' 'PuntoComa' {$$= new Print($3, @1.first_line, @1.first_column);}
    
;


TIPO_DATO
    : 'int'     {$$=Type.NUMBER}
    |'double'   {$$=Type.DECIMAL}
    |'char'     {$$=Type.CHAR}
    |'String'   {$$=Type.STRING}
    |'boolean'  {$$=Type.BOOLEAN}
    |'void'     {$$=Type.VOID}
;

EXPRESION
    : 'menos' EXPRESION %prec UMENOS        {$$=new Arithmetic($2,$2,ArithmeticOption.NEGACION, @1.first_line, @1.first_column); }
    | EXPRESION 'mas' 'mas'                 {$$=new Arithmetic($1, $1,ArithmeticOption.INCR,   @2.first_line, @2.first_column)}
    | EXPRESION 'menos' 'menos'             {$$=new Arithmetic($1, $1,ArithmeticOption.DECR,   @2.first_line, @2.first_column)}
    | EXPRESION 'mas' EXPRESION             {$$=new Arithmetic($1, $3,ArithmeticOption.MAS,   @2.first_line, @2.first_column)}
    | EXPRESION 'menos' EXPRESION           {$$=new Arithmetic($1, $3,ArithmeticOption.MENOS,   @2.first_line, @2.first_column);}
    | EXPRESION 'division' EXPRESION        {$$=new Arithmetic($1, $3,ArithmeticOption.DIV,   @2.first_line, @2.first_column);}
    | EXPRESION 'modulo' EXPRESION          {$$=new Arithmetic($1, $3,ArithmeticOption.MODULO,   @2.first_line, @2.first_column);}
    | EXPRESION 'multiplicacion' EXPRESION  {$$=new Arithmetic($1, $3,ArithmeticOption.MULTIPLICACION,   @2.first_line, @2.first_column);}
    | EXPRESION 'potencia' EXPRESION        {$$=new Arithmetic($1, $3,ArithmeticOption.POT,   @2.first_line, @2.first_column);}
    | EXPRESION 'igualIf' EXPRESION         {$$=new relacional($1, $3,RelacionalOption.IGUAL,   @2.first_line, @2.first_column);}
    | EXPRESION 'mayor' EXPRESION           {$$=new relacional($1, $3,RelacionalOption.MAYOR,   @2.first_line, @2.first_column);}
    | EXPRESION 'menor' EXPRESION           {$$=new relacional($1, $3,RelacionalOption.MENOR,   @2.first_line, @2.first_column);}
    | EXPRESION 'mayorIgual' EXPRESION      {$$=new relacional($1, $3,RelacionalOption.MAYORIGUAL,   @2.first_line, @2.first_column);}
    | EXPRESION 'menorIgual' EXPRESION      {$$=new relacional($1, $3,RelacionalOption.MENORIGUAL,   @2.first_line, @2.first_column);}
    | EXPRESION 'diferente' EXPRESION       {$$=new relacional($1, $3,RelacionalOption.DIFERENTE,   @2.first_line, @2.first_column);}
    | EXPRESION 'and' EXPRESION             {$$=new logic($1, $3,LogicOption.AND,   @2.first_line, @2.first_column);}
    | 'not' EXPRESION                       {$$=new logic($2, $2,LogicOption.NOT,   @1.first_line, @1.first_column);}
    | EXPRESION 'or' EXPRESION              {$$=new logic($1, $3,LogicOption.OR,   @2.first_line, @2.first_column);}
    | ParentesisA EXPRESION ParentesisC     {$$=$2;}        
    | VALOR                                 {$$=$1;}
;


VALOR   
    : 'True'                 {$$= new Literal($1,Type.BOOLEAN,  @1.first_line, @1.first_column)}
    | 'False'                {$$= new Literal($1,Type.BOOLEAN,  @1.first_line, @1.first_column)}
    | 'entero'               {$$= new Literal($1,Type.NUMBER,  @1.first_line, @1.first_column)}
    | 'decimal'              {$$= new Literal($1,Type.DECIMAL,  @1.first_line, @1.first_column)}
    | 'cadena'               {$$= new Literal($1,Type.STRING,  @1.first_line, @1.first_column)}
    | 'ValChar'              {$$= new Literal($1,Type.CHAR,  @1.first_line, @1.first_column)}
    | 'id'                   {$$= new GetId($1,  @1.first_line, @1.first_column)}
    | GET_VECTOR             {$$=$1}
    | ROUND                  {$$=$1}
    | LENGTH                 {$$=$1}
    | TYPEOFF                {$$=$1}
    | TO_LOWER               {$$=$1}
    | TO_UPPER               {$$=$1}
    | TO_STRING              {$$=$1}
    | LLAMADA                {$$=$1}
;



GET_VECTOR
    : 'id' 'CorcheteA' EXPRESION 'CorcheteC' {$$= new GetVector($1, $3 , @1.first_line, @1.first_column)}
    | 'id' 'CorcheteA' EXPRESION 'CorcheteC' 'CorcheteA' EXPRESION 'CorcheteC'  {$$= new GetMatriz($1, $3 , $6, @1.first_line, @1.first_column)}
;

BREAK
    : 'break' 'PuntoComa'       {$$= new BREAK(@1.first_line, @1.first_column)}
;

CONTINUE
    : 'continue' 'PuntoComa'    {$$= new CONTINUE(@1.first_line, @1.first_column)}
;

RETURN
    : 'return' 'PuntoComa'          {$$= new RETURN(null,@1.first_line, @1.first_column)}
    | 'return' EXPRESION 'PuntoComa'{$$= new RETURN($2,@1.first_line, @1.first_column)}
;


ROUND
    : 'round' 'ParentesisA' VALOR 'ParentesisC' {$$=new ROUND($3,@1.first_line, @1.first_column)}
;

RUN
    : 'run' 'id' 'ParentesisA' PARAMETROS_LLAMADA 'ParentesisC' 'PuntoComa' {$$=new RUN($2,$4,@1.first_line,@1.first_column);}
    | 'run' 'id' 'ParentesisA' 'ParentesisC' 'PuntoComa'                    {$$=new RUN($2,null,@1.first_line,@1.first_column);}
;

LENGTH
    : 'length' 'ParentesisA' VALOR_L 'ParentesisC' {$$=new LENGTH($3,@1.first_line, @1.first_column)}
;


VALOR_L
    : 'True'                 {$$= new Literal($1,Type.BOOLEAN,  @1.first_line, @1.first_column)}
    | 'False'                {$$= new Literal($1,Type.BOOLEAN,  @1.first_line, @1.first_column)}
    | 'entero'               {$$= new Literal($1,Type.NUMBER,  @1.first_line, @1.first_column)}
    | 'decimal'              {$$= new Literal($1,Type.DECIMAL,  @1.first_line, @1.first_column)}
    | 'cadena'               {$$= new Literal($1,Type.STRING,  @1.first_line, @1.first_column)}
    | 'ValChar'              {$$= new Literal($1,Type.CHAR,  @1.first_line, @1.first_column)}
    | 'id'                   {$$= new GetId2($1,  @1.first_line, @1.first_column)}
    | GET_VECTOR             {$$=$1}
    | ROUND                  {$$=$1}
    | LENGTH                 {$$=$1}
    | TYPEOFF                {$$=$1}
    | TO_LOWER               {$$=$1}
    | TO_UPPER               {$$=$1}
    | TO_STRING              {$$=$1}
    | LLAMADA                {$$=$1}
;

TYPEOFF
    : 'typeof' 'ParentesisA' VALOR_L 'ParentesisC' {$$=new TYPEOFF($3,@1.first_line, @1.first_column)}
;

TO_STRING
    : 'ToString' 'ParentesisA' VALOR 'ParentesisC' {$$=new TO_STRING($3,@1.first_line, @1.first_column)}
;




TO_UPPER
    : 'toUpper' 'ParentesisA' EXPRESION 'ParentesisC' {$$=new TO_UPPER($3,@1.first_line, @1.first_column)}
;

TO_LOWER
    : 'toLower' 'ParentesisA' EXPRESION 'ParentesisC' {$$=new TO_LOWER($3,@1.first_line, @1.first_column)}
;