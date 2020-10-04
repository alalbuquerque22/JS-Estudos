//colecao dinamica de pares chave/valor

const produto = new Object();

produto.nome = "cadeira";
produto["marca do produto"] = "generica";
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto["marca do produto"];
console.log(produto);

const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Raul",
    idade: 56,
    endereco: {
      logradouro: "rua 1",
      numero: 123,
    },
  },
  condutores: [
    {
      nome: "Junior",
      idade: 19,
    },
    { nome: "Ana", idade: 42 },
  ],
  calcularValorSeguro: function () {
    //
  },
};
carro.proprietario.endereco.numero = 1000;
carro["proprietario"]["endereco"]["logradouro"] = "avenida 2";
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro); // retorna carro sem condutores e outras propriedades excluidas
console.log(carro.condutores); // retorna undefinied
console.log(carro.condutores.length); // retorna erro
