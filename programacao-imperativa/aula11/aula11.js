let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let frutas = ["uva", "laranaja", "maçã", "pessego"]

function converterMaiusculas(array){

    for (i = 0; i < array.length; i++){
        array[i] = array[i].toUpperCase()
    }
    
    console.log(array);
    return array
}

function adicionandoElementos(array1, array2) { 

    for (i = array2.length; i > 0; i-- ){
        array1.push(array2.pop().toUpperCase());         
    }

    console.log(array1)
    return array1  
   }
   

//EXECUÇÃO
converterMaiusculas(filmes)
adicionandoElementos(filmes, frutas)