const notas = [7.7,5.5,5.1,8.1,3.1,7,7.11,9.0]

//sem vcallback

let  notasBaixas =[]
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback 
const notasBaixas2 = notas.filter((nota)=>{
    return nota < 7
})
console.log(notasBaixas2 + " com callback")

// de um jeito mais fast
const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3 + " com callback arrow")