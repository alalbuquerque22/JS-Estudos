const alunos = [
    {nome: 'Joao',nota: 7.9},
    {nome: 'Paulo',nota: 8.9},
    {nome: 'Pietro',nota: 9},
    {nome: 'Lucas',nota: 6.7},
]

//imperativo
//a forma imperativa tras muito mais responsabilidade sobre o codigo
// porem dificulta um pouco a reusabilidade e velocidade de producao
let total1 = 0
for  ( let i = 0; i< alunos.length;i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length);


//Declarativo
// a forma declarativa nao importa como ira percorrer o array...
// tras a vantagem do reuso e tambem reduz a responsabilidade de um codigo
const getNota = aluno => aluno.nota
const soma =(total,atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/ alunos.length);