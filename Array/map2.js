const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.55}',
    '{"nome": "Kit de Lapis", "preco": 40.50}',
    '{"nome": "Caneta", "preco": 1.50}'
]


//exercicio: retornar um array apenas com os precos 
const paraObjeto = json =>JSON.parse(json)
const apenasPreco = produto => produto.preco


const precos = carrinho.map(paraObjeto).map(apenasPreco)

console.log(precos);