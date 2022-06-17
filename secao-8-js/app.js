//Tipos de variáveis java script
//const, var e let
//o var tem escopo Global e local
//o let tem escopo Global, local e de bloco

//escopo é o nível de acesso da variável

var testar = true;
//Escopo Global
var var_global = 10;
let let_global = 15;


function func1(){
    //Escopo Local
    var var_local = 100;
    let let_local = 150;

    console.log(var_global + let_global);
    console.log(var_local + let_local);
}

    //Escopo local, não funciona fora
    //console.log(var_local);
    //console.log(let_local);

if(testar) {
    //Escopo de bloco
    var var_bloco = 100;
    let let_bloco = 150;
}
    console.log(var_bloco);
    //Let não funciona fora do bloco, pois tem escopo de bloco. Esta é a diferença entre let e var
    //console.log(let_bloco);

func1();