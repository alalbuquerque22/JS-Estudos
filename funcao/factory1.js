const prod1 = {
    nome:"...",
    preco: 5
}
const proddois = {
    nome:"..",
    preco:55
}

//esse exemplo assima torna a criacao de objetos muito manual odemos optar pela opcao function factory 


//factory simples
function criarPessoa(){
    return{
        nome:'Andre',
        sobrenome:'Albuquerque'
    }
}

console.log(criarPessoa())