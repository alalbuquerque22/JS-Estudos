// novo recurso do ES2015

const pessoa ={
    nome:'andre',
    idade:20,
    endereco:{
        logradouro:'rua x',
        numero:500
    } 
}

const {nome, idade} = pessoa// operacao destructing
console.log(nome,idade)

// ou

const {nome: n, idade: i} = pessoa
console.log(n,i)



// acessar atributos que nao existem nos retornam undefined
const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome , bemHumorado)
// acessar atributos que nao existem nos retornam undefined
const {endereco: {logradouro,numero,cep}} = pessoa
console.log(logradouro , numero , cep)

//tentar acessar um atributo aninhado que nao foi definido retornara a um erro ex:
const {conta :{ag,num}} = pessoa
console.log(ag,num)
//conta nao foi declarado a pessoa 
