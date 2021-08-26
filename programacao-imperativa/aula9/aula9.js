//PRÁTICA DE CONCEITOS

// 1 - Escreva uma função utilizando uma estrutura básica de IF/ELSE que verifique uma senha. A senha válida é o número 1234. Devem ser impressas as seguintes mensagens:
// 	- ACESSO PERMITIDO caso a senha seja válida.
// 	- ACESSO NEGADO caso a senha seja inválida.

let senhaCorreta = '1234';

function login(senha){
    if (senha == senhaCorreta)
    {
        return console.log("ACESSO PERMITIDO");
    }
    else 
    {
        return console.log("ACESSO NEGADO");
    }
}
	
// 2 - Escreva uma função utilizando a estrutura IF/ELSE-IF/ELSE que receba dois inteiros e diga qual deles é o maior, qual deles é menor OU se são iguais.

function quemEMarior(x,y){
    if(x > y){
        return console.log(x + " é maior que " + y + " !");
    }
    else if (x < y){
        return console.log(y + " é maior que " + x + " !");
    }
    else{
        return console.log(x + " e " + y + " são iguais!");
    }
}

// 3 - Escreva um programa utilizando a estrutura de switch que imprima o mês de acordo com o número fornecido.
// 	- Exemplo: quando envio o número 9, o retorno será: 'SETEMBRO'

function qualEOMes(numeroMes){
    switch (numeroMes){
        case '1' :
            return console.log("Janeiro");
            break;
        case '2' :
            return console.log("Fevereiro");
            break;
        case '3' :
            return console.log("Março");
            break;
        case '4' :
            return console.log("Abril");
            break;
        case '5' :
            return console.log("Maio");
            break;
        case '6' :
            return console.log("Junho");
            break;    
        case '7' :
            return console.log("Julho");
            break;    
        case '8' :
            return console.log("Agosto");
            break;    
        case '9' :
            return console.log("Setembro");
            break;    
        case '10' :
            return console.log("Outubro");
            break;    
        case '11' :
            return console.log("Novembro");
            break;    
        case '12' :
            return console.log("Dezembro");
            break;
        default :
            return console.log("Número inválido. Favor digitar um valor entre 1-12");    
    }
}

// 4 - Reescreva função do exercício 1, utilizando o operador ternário.

function login2(senha){
    var mensagem = senha == senhaCorreta ? "ACESSO PERMITIDO" : "ACESSO NEGADO"
    return console.log(mensagem);    
}

//PROJETO MICROONDAS

// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


function menuMicroondas(prato, tempo){
    var tempoPadrao = getTempoPadrao(prato)
    if (tempoPadrao == 'erro'){
        return {
            erroPrincipal: 
                console.log('Prato inexistente!'),
            ajudaUsuario:
                console.log('Os pratos disponíveis são: Pipoca, Macarrão, Carne, Feijão, Brigadeiro')
        }
    }

    if(tempo == 'padrão' || tempo == "" || tempo == null){
        return console.log("Prato pronto, bom apetite!!!")
    }
    
    if (tempo >= 0){

        if (tempo > (2 * tempoPadrao) && tempo < (3 * tempoPadrao)) {
            return console.log('Sua comida queimou =(')
        }
        if (tempo < tempoPadrao) {
            return console.log('Tempo insuficiente!')
        }
        if (tempo > (3 * tempoPadrao)) {
            return console.log('kabumm')
        }

        return console.log("Prato pronto, bom apetite!!!")
    }

    return console.log("Erro! O parâmetro tempo deve ser um número ou 'padrão'")
                
}

function getTempoPadrao(prato){
    switch (prato){
        case 'Pipoca':
            return 10;
            break;
        case 'Macarrão':
            return 8;
            break;
        case 'Carne':
            return 15;
            break;
        case 'Feijão':
            return 12;
            break;
        case 'Brigadeiro':
            return 8;
            break;
        default:
            return 'erro';
    }
}



//TESTES DA PRÁTICA DE CONCEITOS
    // console.log("TESTES DA PRÁTICA DE CONCEITOS");
    // console.log("");

    // console.log("Função login com If Else");
    // console.log("")
    // console.log("login(1234)")
    // login(1234)
    // console.log("")
    // console.log("login('1234')")
    // login("1234")
    // console.log("")
    // console.log("login(4321)")
    // login(4321)
    // console.log("")
    // console.log("login()")
    // login()

    // console.log("")
    // console.log("----------------------------");

//TESTE MICROONDAS
    // console.log("TESTES MICROONDAS");
    // console.log("")

    // console.log("menuMicroondas('pipoca', 2)")
    // menuMicroondas('pipoca', 2)
    // console.log("")

    // console.log("menuMicroondas('Pipoca', 2)")
    // menuMicroondas('Pipoca', 2)
    // console.log("")

    // console.log("menuMicroondas('Pipoca')")
    // menuMicroondas('Pipoca')
    // console.log("")

    // console.log("menuMicroondas('Macarrão', 20)")
    // menuMicroondas('Macarrão', 20)
    // console.log("")

    // console.log("menuMicroondas('Macarrão', 10)")
    // menuMicroondas('Macarrão', 10)
    // console.log("")

    // console.log("menuMicroondas('Macarrão', 30)")
    // menuMicroondas('Macarrão', 30)
    // console.log("")
