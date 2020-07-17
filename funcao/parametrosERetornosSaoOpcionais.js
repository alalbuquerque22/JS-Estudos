function area(largura, altura){
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2. `)
    } else {
        return area 
    }
}

console.log(area(2,3))// calcula normalmente o valor de altura e largura
console.log(area(2)) //resulta em um NaN por nao ter o segundo parametro
console.log(area())//resulta em um NaN por nao ter nenhum parametro
console.log(area(2,3,5,7,8,9))//calcula normalmente e ignora os demais valores 
console.log(area(5,5))//retorna mensagem de valor nao permitido e tbm retorna UNDEFINED 