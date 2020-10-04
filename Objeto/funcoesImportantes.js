const pessoa = {
  nome: "rebeca",
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach((element) => {
  //Object.entries(pessoa).forEach(([chave,valor])
  console.log(`${element[0]}: ${element[1]}`);
  //   console.log(`${chave}: ${valor}`);
});
Object.defineProperty(pessoa, "datanascimento", {
  enumerable: true,
  writable: false,
  value: "01/01/2020",
});

pessoa.datanascimento = "01/02/2023";
console.log(pessoa.datanascimento);
console.log(Object.keys(pessoa));

//Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 1 };
const o2 = { c: 3, a: 2 };
const obj = Object.assign(dest, o1, o2); 
// com assign o primeiro objeto é mergeado com os seguintes parametros na funcao (dest<- o1 + o2)

Object.freeze(obj);
obj.c = 1234;
console.table(obj);
