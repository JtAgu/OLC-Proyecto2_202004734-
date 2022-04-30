
const express = require('express');
const { Funcion } = require('./ts/src/Instruccion/Funcion');
const { RUN } = require('./ts/src/Instruccion/Run');
var fs = require("fs");
var exec = require("child_process");
var singleton_1 = require("./ts/src/patrondiseno/singleton");
var salida = new singleton_1.Singleton();
//import { saveAs } from 'file-saver';
const routes = express.Router()
var entrada = '';
var salidaMSG = '';
var Errores = ""
var Ambientes = ""
var AST = ""



routes.get('/', function (req, res) {
    res.json({ msg: entrada })
});

routes.post('/SetFile', function (req, res) {
    entrada = req.body.msg
    var nombre="C:/Users/justin/Desktop/Entrada.cst"
    createHTML(nombre,entrada);
    res.send(req.body.msg)
})

routes.get('/Ejecutar', function (req, res) {
    var Environment_1 = require("./ts/src/simbolos/Environment");
    var parser = require("./ts/src/grammar/gramatica");
    var ast = parser.parse(entrada.toString());
    var env = new Environment_1.Environment(null, "PRINCIPAL");



    //recorrer las instrucciones y ejecutarlas
    var i = 0, j = [];
    //console.log(salida.getError());
    salida.clear();
    console.log(salida.get_ast());
    for (const error of ast[1]) {
        salida.addError(error);
    }

    salida.add_ast(`nodeOriginal[label="<\\Lista_Instrucciones\\>"];`)
    for (const instr of ast[0]) {

        try {

            instr.ast(salida);
            //console.log(instr.line.instr.column)
            salida.add_ast(`nodeOriginal->node_${instr.line}_${instr.column}_;`)
        } catch (error) {
        }
    }

    for (const instruccion of ast[0]) {
        try {
            i++;

            if (instruccion instanceof RUN || instruccion instanceof Funcion) {

                let ins = instruccion.execute(env, salida);
                if (ins != undefined) {
                    if (ins == "RUN") {
                        j.push(instruccion);
                    }
                }
            }

        }
        catch (error) {
            console.log(error);
        }
    }
    for (const run of j) {
        run.execute2(env, salida);
    }

    for (const instruccion of ast[0]) {

        try {
            i++;
            if (instruccion instanceof RUN || instruccion instanceof Funcion) {

            } else {
                instruccion.execute(env, salida);
            }
        }
        catch (error) {
            console.log(error);
        }
    }



    salida.addEnv(env);
    //console.log(Ambientes);
    //console.log("AST\n")
    //console.log(salida.get_ast())
    AST = salida.get_ast();
    //console.log("ERRORES\n")
    //console.log(salida.get_error());
    Errores = salida.get_error();
    //console.log("ENTORNOS\n")
    //console.log(salida.get_entorno());
    Ambientes = salida.get_entorno();


    salidaMSG = salida.getMsg();
    //exec('mkdir out/')
    //saveAs(salida.get_error(),"out/errores.html" )
    //var blob = new Blob([salida.get_error()], {type: "text/plain;charset=utf-8"});
    //FileSaver.saveAs(blob, "out/errores.html");
    //createFile("out/entornos.html", salida.get_entorno())
    //createFile("out/ast.dot", "digraph G {\nnode[shape=box];" + s.get_ast() + "\n}")
    //exec('dot -Tpng out/ast.dot -o out/ast.png ')

    //console.log(AST);

    res.json({ msg: salidaMSG })
})

routes.get('/Nuevo', function (req, res) {
    salida.clear();
    entrada = "";
    salidaMSG = '';
    Errores = '';
    Ambientes = '';
    res.json({ msg: "Valores reiniciados" })
})

routes.get('/Errores', function (req, res) {
    createHTML("C:/Users/justin/Desktop/USAC/2022/primerSemestre/COMPI1/OLC-Proyecto2_202004734/OLC-Proyecto2_202004734-/myapp/public/Errores.html", html + `
    <table class="table table-success table-striped">
            <thead>
                <tr class="table-dark">
                    <th> No </th>
                    <th> Descripcion </th>
                    <th> Tipo </th>
                    <th> Linea </th>
                    <th> Columna </th>
                </tr>
            </thead>
        <tbody>
        `+ Errores + `
        </tbody>
        </table>`+ html2);
    res.json({ msg: Errores })
})

var html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <title>OLC APP</title>
  </head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <body>`

var html2 = `</body>
</html>`


routes.get('/Simbolos', function (req, res) {
    createHTML("C:/Users/justin/Desktop/USAC/2022/primerSemestre/COMPI1/OLC-Proyecto2_202004734/OLC-Proyecto2_202004734-/myapp/public/Simbolos.html", html + `
    <table class="table table-success table-striped">
    <thead>
        <tr class="table-dark">
            <th> Nombre </th>
            <th> Tipo </th>
            <th> Tipo </th>
            <th> Ambiente </th>
            <th> Linea </th>
            <th> Columna </th>
        </tr>
        </thead>
        <tbody>
        `+ Ambientes + `
        </tbody>
        </table>`+ html2);
    res.json({
        msg: Ambientes
    })
})

function createHTML(name, content) {
    fs.writeFile(name, content, () => {
        console.log();
    })
}


routes.get('/AST', function (req, res) {
    createFile();
    exec.exec('dot -Tpdf C:/Users/justin/Desktop/USAC/2022/primerSemestre/COMPI1/OLC-Proyecto2_202004734/OLC-Proyecto2_202004734-/myapp/public/AST.dot -o C:/Users/justin/Desktop/USAC/2022/primerSemestre/COMPI1/OLC-Proyecto2_202004734/OLC-Proyecto2_202004734-/myapp/public/AST.pdf')
})
function createFile() {
    fs.writeFile("C:/Users/justin/Desktop/USAC/2022/primerSemestre/COMPI1/OLC-Proyecto2_202004734/OLC-Proyecto2_202004734-/myapp/public/AST.dot", "digraph structs {\n" + AST + "}", () => {
        console.log();
    })
}

module.exports = routes
