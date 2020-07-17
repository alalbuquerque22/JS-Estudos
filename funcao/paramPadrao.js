//estrategia 1 para valor padrão

function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+ b +c
}

console.log(
    soma1(),
    soma1(3),
    soma1(1,2,3),
    soma1(0,0,0)// ira retornar 3 pois ZERO eh lido como false   
     );

// estrategia 2,3 e 4 para gerar valor padrao
     function soma2(a,b,c){
         a = a !== undefined ? a : 1 // estrategia 2
         b = 1  in arguments ? b : 1 //estrategia 3
         c = isNaN(c)? 1 : c//estrategia 4
         return a +b +c 
     }
     console.log('- - Estrategia 2, 3 e 4  - -')
     console.log(soma2(), '- Resultado sem passar parametro')
     console.log(soma2(3),'soma do primeiro valor + os demais parametros') 
     console.log(soma2(1,2,3),'soma de todos os parametros')
     console.log( soma2(0,0,0),'resutlado zero pois todos os parametros sao zero')
     console.log(' *******')




     //valor padrao ES2015
     function soma3(a =1, b= 2 , c = 3){
        
        return a + b + c
     }
     console.log('- - Estrategia 3 - - ')

     console.log(soma2(), '- Resultado sem passar parametro')
     console.log(soma2(3),'- soma do primeiro valor + os demais parametros') 
     console.log(soma2(1,2,3),'- soma de todos os parametros')
     console.log( soma2(0,0,0),'- resutlado zero pois todos os parametros sao zero')
     console.log(' ********') 