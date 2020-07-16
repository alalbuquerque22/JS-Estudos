function getInteiroAleatorio(min,max){
    const valor = Math.random() *(max-min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != 1){
    opcao = getInteiroAleatorio(-1,-10)
    console.log(`Opcao escolhida foi ${opcao}`)
}
// expressao com a probabilidade de ser infinita ... p ois nada determina seu fim   
console.log('ate a proxima ')