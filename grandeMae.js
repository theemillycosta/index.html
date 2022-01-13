//APRENDIZ DE FEITICEIRA
function aprendizDeFeiticeira_1(){
    while (question != 1 || question != 2 ){
        var question = prompt(
            '1. Caminho abandonado \n 2. Trilha aberta'
        );
    
        if (question == 1){
            window.location.href="aprendizDeFeiticeira-2.html";
            break;
        } else if (question == 2) {
            window.location.href="aprendizDeFeiticeira-GameOver.html";
            break;
        } else {
            alert("escolha a opção 1 ou 2")
        }
    }
}

function aprendizDeFeiticeira_2(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1. Para e ajuda \n 2. Segue a busca '
        );
    
        if (question == 2){
            window.location.href="aprendizDeFeiticeira-3.html";
            break;
        } else if (question == 1) {
            window.location.href="aprendizDeFeiticeira-GameOver.html";
            break;
        } else {
            alert("escolha a opção 1 ou 2")
        }
    }
}

function aprendizDeFeiticeira_3(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1. Se arrisca a lutar com eles \n 2. Busca uma forma de passar por eles sem mais danos'
        );
    
        if (question == 2){
            window.location.href="aprendizDeFeiticeira-WIN.html";
            break;
        } else if (question == 1) {
            window.location.href="aprendizDeFeiticeira-GameOver.html";
            break;
        } else {
            alert("escolha a opção 1 ou 2")
        }
    }
}

//FILHO DE UMA FADA
function filhoDeUmaFada_1(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1. Voando \n 2 Trilha na Floresta'
        );
    
        if (question == 1){
            window.location.href="FilhoDeUmaFada-2.html";
            break;
        } else if (question == 2) {
            window.location.href="FilhoDeUmaFada-GameOver.html";
            break;
        } else {
            alert("escolha a opção 1 ou 2")
        }
    }
}

function filhoDeUmaFada_2(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1. Entra em uma luta com ela \n 2. Lança um feitiço contra ela'
        );
    
        if (question == 2){
            window.location.href="FilhoDeUmaFada-3.html";
            break;
        } else if (question == 1) {
            window.location.href="FilhoDeUmaFada-GameOver.html";
            break;
        } else {
            alert("escolha a opção 1 ou 2")
        }
    }
}

function filhoDeUmaFada_3(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1. Desaparece para passar por eles \n 2. Se esconde até que eles decidam ir embora'
        );
    
        if (question == 1){
            window.location.href="FilhoDeUmaFada-WIN.html";
            break;
        } else if (question == 2) {
            window.location.href="FilhoDeUmaFada-GameOver.html";
            break;
        } else {
            alert("escolha a opção 1 ou 2")
        }
    }
}

//FILHA DE ELFO
function filhaDeElfo_1(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1. Pelas trilhas existentes \n 2. Pelas arvores'
        );
    
        if (question == 2){
            window.location.href="FilhaDeElfo-2.html";
            break;
        } else if (question == 1) {
            window.location.href="FilhaDeElfo-GameOver.html";
            break;
        } else {
            alert("escolha a opção 1 ou 2")
        }
    }
}

function filhaDeElfo_2(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1. Para e oferece ajudar para eles \n 2. Segue seu caminho pelas arvores'
        );
    
        if (question == 2){
            window.location.href="FilhaDeElfo-3.html";
            break;
        } else if (question == 1) {
            window.location.href="FilhaDeElfo-GameOver.html";
            break;
        } else {
            alert("escolha a opção 1 ou 2")
        }
    }
}

function filhaDeElfo_3(){
    while (question != 1 || question != 2){
        var question = prompt(
            '1. Se mantem nas arvores e os ataca com flexas \n 2. Desce e entra em luta corporal com eles'
        );
    
        if (question == 1){
            window.location.href="FilhaDeElfo-WIN.html";
            break;
        } else if (question == 2) {
            window.location.href="FilhaDeElfo-GameOver.html";
            break;
        } else {
            alert("escolha a opção 1 ou 2")
        }
    }
}