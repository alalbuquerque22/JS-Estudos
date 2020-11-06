//object.preventExtensions
// impossibilita a adicao de atributos ao objeto... permitindo apenas a alteracao e exclusao de parametros

const produto = Object.preventExtensions({
    nome: 'qualquer',
    preco: 1.99,
    tag:'promocao'
})

console.log('extensivel:', Object.isExtensible(produto))


produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal
//nao consegue adicionar atributos e nem excluir ... apenas modificar os atributos do obj

const pessoa = {
    nome:'juliana',
    idade:35
}
Object.seal(pessoa)
console.log('selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 25
console.log(pessoa)

//Object.freeze = selado + valores constantes/
// nao consegue alterar nem excluir e nem adicionar atributos aos objetos 
