//funcao em js e First-class object
//higher-orderfunction

//criar de form literal 
function fun1() {}

//armazenar funcao dentro de uma variavel
const fun2 = function () {}

//armazenar dentro de um array 
const array =[function(a,b){return a+b}, fun1,fun2 ]
console.log(array[0](2,3))// executa a funcao do indice zero do array e passa dois parametros

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

// passar funcao como parametro para outra funcao
function run(fun){
    fun()
}
run(function(){console.log('executando...')})

//uma funcao ode retornar/conter uma funcao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
} 
soma(2,3)(4)// ou 
const cincoMais = soma(2,3)// a constante recebe uma funcao com o parametro setado
cincoMais(4)