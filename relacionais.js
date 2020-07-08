console.log('01)','1'==1)//ele e do mesmo valor?
console.log('02)','1'===1)//ele e do mesmo valor e do mesmo tipo?
console.log('03)','3' !=3)//ele e diferente do valor? deve retornar falso
console.log('04)','3' !==3)//ele estritamente diferente do valor e do tioo? deve retornar verdade



console.log('05)',3<2 )//comoara o orimeiro com o segundo ? deve retornar falso
console.log('06)',3>2 )//comoara o orimeiro com o segundo ? deve retornar verdade
console.log('07)',3<=2 )//comoara o orimeiro com o segundo ? deve retornar falso
console.log('08)',3>=2 )//comoara o orimeiro com o segundo ? deve retornar verdade

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1===d2)// deve retornar falso devido a comoaracao feita na memria do sis
console.log('10)', d1==d2)// deve retornar falso devido a comoaracao feita na memria do sis
console.log('11)', d1.getTime()===d2.getTime())// deve retornar verdade devido a comoaracao feita  com o tioo number 
console.log('12)', d1.getTime()==d2.getTime())// deve retornar verdade devido a comoaracao feita  com o tioo number 

console.log('13', undefined == null)// verdadeiro oois nao tem valores
console.log('14', undefined === null)// falso oois sao do mesmo tioo