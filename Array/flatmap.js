//o flatmap é um concat com apply 
// servira para concatenar arrays dentro de arrays 
const escola = [{
    nome: 'turma m1',
    alunos:[{
        nome:'gustavo',
        nota:0.1
    },{
        nome:'Ana',
        nota:9.1
    }]
},{
    nome:'turma m2',
    alunos:[{
        nome:'Rebeca',
        nota:8.1 
    },
    {
        nome:'Roberto',
        nota:7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1);

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))

}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2);