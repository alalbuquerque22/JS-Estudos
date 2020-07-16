const notas = [6.7,7.5,9.8,8.1,7.7]
// com For In podesse percorrer dentro de arrays e objetos 
for(let i in notas ){
    console.log(notas[i])
}

const pessoa = {
    nome : 'andre',
    sobrenome : 'lucas',
    idade: 29,
    peso:75

}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}    `)
}
//percorre o indice de cada atributo dentro de um objeto