//CALCULADORA NIVEL I

function adicionar(x, y){
    var result = x + y;  
    console.log(`Função adicionar -> ${x} + ${y} = `, result)      

    return result
}

function subtracao(x, y){
    var result = x - y;   
    console.log(`Função subtração -> ${x} - ${y} = `, result)
     
    return result
}

function multiplicacao(x, y){
    var result = x * y;        
    console.log(`Função multiplicação -> ${x} * ${y} = `, result)

    return result
}

function divisao(x, y){
    var result = x / y;
    console.log(`Função divisão ->  ${x} / ${y} = `, result)
        
    return result
}

//EXECUÇÃO

adicionar(5,2)