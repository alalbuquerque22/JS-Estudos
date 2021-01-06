const alunos = [
    {nome:'Joao', nota: 7.3, bolsista:false},
    {nome:'Maria', nota: 9.3, bolsista:true},
    {nome:'Andre', nota: 9.83, bolsista:false},
    {nome:'Pedro', nota: 8.73, bolsista:true},
]
console.log(alunos.map(a=> a.nota));

const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
        console.log(acumulador , atual)
        return acumulador + atual;
},0)

console.log(resultado)