function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)// nao ira exibir pois nao tem uma condicao atribuida para valores menores que 7

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('E verdadde...', valor)
    }
}

seForVerdadeEuFalo()//nao retorna nada //false
seForVerdadeEuFalo(null)//false, nao retorna nada 
seForVerdadeEuFalo(undefined)// false ,  nao retorna nada
seForVerdadeEuFalo(NaN)// false , nao retorna nada 
seForVerdadeEuFalo('')// falso e nao retorna nada
seForVerdadeEuFalo(0)//fals0, 0 unico numero que retorna falso 
seForVerdadeEuFalo(-1)//verdade , retorna resultado
seForVerdadeEuFalo(' ')// verdade, esoaco em branco
seForVerdadeEuFalo('?')//verdade ...
seForVerdadeEuFalo([])//verdade
seForVerdadeEuFalo([1,2])//verdade
seForVerdadeEuFalo({})//verdade