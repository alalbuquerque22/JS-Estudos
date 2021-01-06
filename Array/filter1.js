const produtos = [
    {nome: 'notebook',preco: 2499, fragil: true},
    {nome: 'Ipad Pro',preco: 4122, fragil: true},
    {nome: 'Copo de Vidro',preco: 12.49, fragil: true},
    {nome: 'Copo de Plaastico',preco: 2.59, fragil:false},
]

console.log(produtos.filter(function(p){
    return false
}));



const caro = produto  => produto.preco >=500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil));