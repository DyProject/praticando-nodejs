const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Bem vindo ao guia do programador")
})

app.get("/ola/:nome", function(req,res){

    var nome = req.params.nome;
    res.send("OI, " + nome)
})

//Passar parâmetro obrigatório
app.get("/ola/:nome/:empresa", function(req,res){
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("OI, " + nome + " da empresa " + empresa) 
})

//Passar parâmetro opcional
app.get("/blog/:artigo?", function(req,res){
    var artigo = req.params.artigo;

    if(artigo){
        res.send("Artigo:" + artigo);
    }else{
        res.send("Nenhum artigo passado"); 
    }

    
})

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor Rodando");
    }
})