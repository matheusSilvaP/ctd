//CALCULADORA NIVEL I

console.log (" ")
console.log ("-------------- Teste de Operações / Calculadora I --------------")
console.log (" ")

function adicionar(x, y){
    var result = x + y; 

    // console.log("Função adicionar -> " + x + " + " + y + " = " + result)      

    return result
}

function subtracao(x, y){
    var result = x - y;   

    // console.log("Função subtracao -> " + x + " - " + y + " = " + result)      
     
    return result
}

function multiplicacao(x, y){
    var result = x * y;     

    // console.log("Função multiplicacao -> " + x + " * " + y + " = " + result)      

    return result
}

function divisao(x, y){
    var result = x / y;

    // console.log("Função divisao -> " + x + " / " + y + " = " + result)      
        
    return result
}

// EXECUÇÃO I
adicionar(5,2)
subtracao(5,2)
multiplicacao(5,2)
divisao(0,1)



// //CALCULADORA NIVEL III

// console.log (" ")
// console.log ("-------------- Teste de Operações / Calculadora III --------------")
// console.log (" ")


// function quadradoDoNumero(x){
//     var result = multiplicacao(x,x)

//     console.log("Função quadradoDoNumero -> " + x + "²" + " = " + result)      

//     return result
// }

// function mediaDeTresNumeros(x, y, z){
//     var result = adicionar(x,y)
//     result = adicionar(result,z)
//     result = divisao(result,3)

//     console.log("Função mediaDeTresNumeros -> (" + x + "+" + y + "+" + z + ") / 3 = " + result)      

//     return result
// }

// function calculaPorcentagem(x, y){
//     var percentual = divisao(y,100)
//     var result = multiplicacao(x,percentual)
    
//     console.log("Função calculaPorcentagem -> " + y + " % de " + x + " = " + result)      

//     return result
// }

// function geradorDePorcentagem(x, y){
//     var percentual = divisao(x,y)
//     var result = multiplicacao(percentual,100)
    
//     console.log("Função geradorDePorcentagem -> " + x + " é igual a " + result + " % de " + y)      

//     return result
// }



// //EXECUÇÃO III
// quadradoDoNumero(5)
// mediaDeTresNumeros(5,2,10)
// calculaPorcentagem(300,15)
// geradorDePorcentagem(20,200)

// console.log (" ")
