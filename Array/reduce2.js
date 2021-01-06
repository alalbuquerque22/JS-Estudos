const alunos = [
    {nome:'Joao', nota: 7.3, bolsista:true},
    {nome:'Maria', nota: 9.3, bolsista:false },
    {nome:'Andre', nota: 9.83, bolsista:true},
    {nome:'Pedro', nota: 8.73, bolsista:false},
]
console.log(alunos.map(a=> a.nota));


//Desafio 1: todos os alunos sao bolsistas?
const bolsistas = (resultado,bolsista) => resultado && bolsista
console.log( alunos.map(a=> a.bolsista).reduce(bolsistas));
// ;




//Desafio 2: algum aluno é bolsista?
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log( alunos.map(a=> a.bolsista).reduce(algumBolsista));