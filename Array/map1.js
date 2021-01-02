const nums = [1,2,3,4,5]


// funcao map transforma um array, porem nao modifica o original.

//for com proposito
let multiplicaPor2= nums.map(function(e){
    return e * 2
})

console.log(multiplicaPor2);

const soma10 = e => e + 10
const triplo = e => e * 3

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado);