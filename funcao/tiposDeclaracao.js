//posso consultar uma function declaration antes de escrevela
console.log(soma(5,5))


//function declaration
function soma (x,y){
    return x+y
}

//function expression
const sub = function (x,y){
    return x-y
}
console.log(sub(5,5))// apenas posso utilizar o log de function expression apos declara-lo

//named function expression
const mult = function mult(x,y){
    return x * y
}
console.log(mult(5,5))// apenas posso utilizar o log de named function expression apos declara-lo


