//implementando o funcionamento de um map com FOR
Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0 ; i < this.length; i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.55}',
    '{"nome": "Kit de Lapis", "preco": 40.50}',
    '{"nome": "Caneta", "preco": 1.50}'
]


//exercicio: retornar um array apenas com os precos 
const paraObjeto = json =>JSON.parse(json)
const apenasPreco = produto => produto.preco


const precos = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(precos);