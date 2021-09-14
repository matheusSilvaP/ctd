function adiciona (mensagemInicial, termoAdicionar){

    let mensagemFinal = mensagemInicial;
    if (termoAdicionar != null){
        mensagemFinal = mensagemFinal + " " + termoAdicionar
    }

    console.log(mensagemFinal)

}

module.exports = adiciona;