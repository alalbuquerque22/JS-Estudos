const imprimeResultado =  (nota)=>{
    if(nota>=7){
        console.log('Aprovado.')

    }else{
        console.log('reprovado')
    }
}

imprimeResultado(8)
imprimeResultado(4)
imprimeResultado('epa')//cuidado com a validacao de entrada ... js nao eh JAVA lol