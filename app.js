var Calculadora = require("./calculadora");
var http = require("http");

console.log(Calculadora.mult(10, 5));
console.log(Calculadora.nome);

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao meu site!</><h4>guiadoprogramador.com</h4>")
}).listen(3000)

console.log("Meu servidor está rodando!")