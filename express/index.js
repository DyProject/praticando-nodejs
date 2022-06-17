const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Bem vindo ao guia do programador")
})

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor Rodando");
    }
})