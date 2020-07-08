//armazenando uma funcao dentro fde uma variavel 
const imbprimirSoma = function (a,b){
console.log(a+b)
}

console.log(2,3);//resultado 5


//armazenando uma funcao arrow em uma variavel 

const soma =(a,b) =>/* o simbolo => substitui a palavra function 
*/ {
    return a+b
}
console.log(soma(2,3));//resultado 5


//retorno implicito
const subtracao = (a,b) => a-b // qunado nao possui {} ele "devolve" diretamente o retorno da funcao
console.log(subtracao(2,3)); // resultado -1

const imprimir2 = a => console.log(a);
imprimir2('legal!!!!!');