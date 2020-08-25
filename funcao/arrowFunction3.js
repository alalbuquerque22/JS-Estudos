let comparaComThis = function(param) {
    console.log(this===param)
}


// quando atribuito em uma variavel o this tem contexto global ... ENTAO TOMAR CUIDADO Ara NAO ALTERAR 
comparaComThis(global)// retorna true 

const obj = { }
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)//retorna false
comparaComThis(obj)// retorna true devido ao bind

let comparaComThisArrow = param => console.log(this == param)
comparaComThisArrow(global)//retorna false
comparaComThisArrow(module.exports)//retorna true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)// retorna falso, a arrow function eh mais forte 
comparaComThisArrow(module.exports)// retorna true .... ele continua aoontando o obj descrito
