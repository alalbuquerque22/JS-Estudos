//maneiras de  escrita de uma funcao, sendo o arrow function uma maneira de mais rapida escrita

// a beneficio em usar arrow f, pois o this fica constante(nao muda nunca)
let dobro = function(a){
    return 2*a
}
//ou
dobro = (a) => {
    return 2 * a
}
//ou

dobro = a => 2*a // aquei o retorno esta implicito
console.log(dobro(Math.PI))

ola = ()=> "ola"
//ou
ola = _ => 'ola' // possui um param

console.log(ola())