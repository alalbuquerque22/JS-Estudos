function soma(){
    let soma = 0
    for(i in arguments){
       soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))//soma todos os argumentos/ arametros 
console.log(soma(1.1,2.2,"teste")) //soma todos e aloca o texto logo no fim
console.log(soma('a',"b",'c'))//concatena todos os strings apos retornar 0(soma)