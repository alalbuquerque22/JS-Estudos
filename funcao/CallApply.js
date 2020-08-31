function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1+ imposto)}`
}

const produto ={
    nome:'Notebook',
    preco:5500,
    desc:0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco : 50000, desc:0.1}

//carro nao (possui a funcao getpreco dentro do seu objeto, (por isso usa a fucao call
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, "$"))
// o a(p(ply (passa os (parametros na forma de array
console.log(getPreco.apply(carro,[0.17, "$"]))