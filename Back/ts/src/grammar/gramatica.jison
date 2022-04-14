%{
    const {Declaracion} = require('../instruccion/Declaracion');
    const {Type} = require('../simbolos/Type');
    const {Arithmetic} = require('../expression/aritmeticas');
    const {ArithmeticOption} = require('../expression/aritmeticOption');
    const {Literal} = require('../expression/literal');
    const {PrintLn} = require('../Instruccion/println');
    const {Asignacion} = require('../Instruccion/Asignacion');
    const {Print} = require('../Instruccion/print');
%}

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
                console.log('Este es un error lexico : '+yytext+", en la linea : "+yylloc.first_line+", columna : "+yylloc.fisrt_column);
            }

/lex

%right InterrogacionC
%left 'or'
%left 'and'
%right 'not'
%left 'igualIf' 'desIgual' 'mayor' 'mayorIgual' 'menor' 'menorIgual'
%left 'mas' 'menos'
%left 'division' 'multiplicacion' 'modulo'
% 'potencia'
%right UMENOS



%start INIT

%%

INIT
    : INSTRUCCION EOF{console.log("termine analizar, recursiva por la derecha c:"); return $1;}
;

INSTRUCCION
    : INSTRUCCION INSTRUCCIONES {$1.push($2); $$=$1;}
    |INSTRUCCIONES {$$=[$1]}
;

INSTRUCCIONES
    : DECLARACION   {$$=$1}
    | ASIGNACION    {$$=$1}
    | PRINT         {$$=$1}
    | PRINT_LN      {$$=$1}
;


PRIMITIVOS
    :  DECLARACION {$$=$1;}
;


DECLARACION
    : TIPO_DATO 'id' 'igual' EXPRESION 'PuntoComa' {$$= new Declaracion($2,$1,$4,@1.first_line,@1.fisrt_column);}
;

PRINT_LN
    : 'Println' 'ParentesisA' EXPRESION 'ParentesisC' 'PuntoComa'  {$$= new PrintLn($3, @1.first_line, @1.first_column)}
;

ASIGNACION
    : 'id' 'igual'  EXPRESION  'PuntoComa' {$$= new Asignacion($1,$3, @1.first_line, @1.first_column)}
;

PRINT
    : ''Print' 'ParentesisA' EXPRESION 'ParentesisC' 'PuntoComa' {$$= new Print($3, @1.first_line, @1.first_column)}
;


TIPO_DATO
    : 'int'     {$$=Type.NUMBER}
    |'double'   {$$=Type.DECIMAL}
    |'char'     {$$=Type.CHAR}
    |'String'   {$$=Type.STRING}
    |'boolean'  {$$=Type.BOOLEAN}
;

EXPRESION
    : MENOS expresion %prec UMENOS          {$$=new Arithmetic(-1,$2,ArithmeticOption.NEGACION, @1.first_line, @1.first_column); }
    | EXPRESION 'mas' EXPRESION             {$$=new Arithmetic($1, $3,ArithmeticOption.MAS,   @1.first_line, @1.first_column)}
    | EXPRESION 'menos' EXPRESION           {$$=new Arithmetic($1, $3,ArithmeticOption.MENOS,   @1.first_line, @1.first_column);}
    | EXPRESION 'division' EXPRESION        {$$=new Arithmetic($1, $3,ArithmeticOption.DIVISION,   @1.first_line, @1.first_column);}
    | EXPRESION 'modulo' EXPRESION        {$$=new Arithmetic($1, $3,ArithmeticOption.DIVISION,   @1.first_line, @1.first_column);}
    | EXPRESION 'multiplicacion' EXPRESION  {$$=new Arithmetic($1, $3,ArithmeticOption.MULTIPLICACION,   @1.first_line, @1.first_column);}
    | EXPRESION 'potencia' EXPRESION        {$$=new Arithmetic($1, $3,ArithmeticOption.POT,   @1.first_line, @1.first_column);}
    | VALOR                                 {$$=$1;}
;


VALOR   
    :'True'     {$$= new Literal($1,Type.BOOLEAN,  @1.first_line, @1.first_column)}
    |'False'    {$$= new Literal($1,Type.BOOLEAN,  @1.first_line, @1.first_column)}
    |'entero'   {$$= new Literal($1,Type.NUMBER,  @1.first_line, @1.first_column)}
    |'decimal'  {$$= new Literal($1,Type.DECIMAL,  @1.first_line, @1.first_column)}
    |'cadena'   {$$= new Literal($1,Type.STRING,  @1.first_line, @1.first_column)}
    |'char'     {$$= new Literal($1,Type.CHAR,  @1.first_line, @1.first_column)}
;
