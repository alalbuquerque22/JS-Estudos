const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop()//remove o ultimo elemento do array
console.log(pilotos,'executou pop()')

pilotos.push('Verstappen')//adiciona na ultima posicao
console.log(pilotos,'executou push(verstappen)')

pilotos.shift()//remove a primeira posicao
console.log(pilotos, 'executou shift()')

pilotos.unshift('Hamilton')//adiciona na primeira posicao
console.log(pilotos,'executou unshift(hamilton)')

//splice pode adicionar e remover elementos

//adicionar

pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos,'adicionou com metodo splice()')

//remover
pilotos.splice(3,1)// 'massa' sai
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)//novo array
//coloca pedaco do array antigo no novo objeto (posicao do array)
console.log('algunsPilotos1 => ',algunsPilotos)

const algunsPilotos2 = pilotos.slice(1,4)//(de um indice ate o outro  )
console.log('algunsPilotos2 =>  ', algunsPilotos2)