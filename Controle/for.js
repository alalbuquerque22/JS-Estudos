let contador = 1
 while (contador <=10){
     console.log(`contador = ${contador}`)
     contador++
     // aqui o contador termina parado em 11 
 }
 console.log(contador)// aqui o contador termina parado em 11
 for(let i=1; i<=10;i++){
     console.log(`contador "i"= ${i}`)
     // aqui o contador termina em 10
 }
 

 const notas = [6.7,7.5,9.8,8.1,7.7]
for (let i= 0; i< notas.length;i++) {//length ira percorrer o array por completo
    console.log(`notas = ${notas[i]}`)
}