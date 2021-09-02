let filmes = ['star wars', 'matrix', 'robot', 'o Preço do Amanhã', 'a Vida é Bela']
let designInterface = ['Figma', 'Adobe XD', 'Sketch', 'Marvel APP']

function converterMaisculas(array){

    for (let index = 0; index < array.length; index++) {
        array[index] = array[index].toUpperCase();
    }

    return array;
}

console.log(filmes);
console.log(converterMaisculas(filmes));


function adicionarElementosDoArray2NoArray1(array1, array2) {

    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());
    
    return array1;

}

saida = adicionarElementosDoArray2NoArray1(filmes, designInterface);
console.log(saida);