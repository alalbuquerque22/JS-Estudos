function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto:0.1
    }
}

console.log(criarProduto('notebook',3000.89))
console.log(criarProduto('mouse',500.05))