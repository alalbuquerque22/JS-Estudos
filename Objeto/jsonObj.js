const obj = {a:1,b:2,c:3, soma(){return a + b +c}}

console.log(JSON.stringify(obj))

//todo nome de atributos no json tem que posuir aspas duplas ""
//console.log(JSON.parse("{a:1,b:2,c:3}")) => forma errada
//console.log(JSON.parse("{'a':1,'b':2,'c':3}")) => forma errada
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
console.log(JSON.parse('{"a":1,"b":"string","c":true, "d":{}, "e":[]}'))