console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola'


console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = () => {console.log('Exec...')}
// this deixa o atributo visivel externamente.... 'PUBLICO'
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()
//exec esta no contexto PUBLICO dentro da funcao obj(objeto estanciado como new). entao o mesmo retornara sua funcao de imOprimir 