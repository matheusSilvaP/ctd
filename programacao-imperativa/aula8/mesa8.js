function podeSubir(altura, acompanhada) {
    let result = false;
    let mensagem = 'Acesso negado.';

    if (altura > 1.4 && altura < 2) {
        result = true;
        mensagem = 'Acesso autorizado.';
    }
    else if (altura < 1.4 && acompanhada == true && altura > 1.2) {
        result = true
        mensagem = 'Acesso autorizado somente com acompanhante.';
    }

    console.log(result, mensagem)
    return result
}

//Execução

podeSubir(1.5)
