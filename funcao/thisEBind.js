const pessoa = {
  saudacao: " Bom dia !",
  falar() {
    console.log(this.saudacao); //precisa do this para executar a impressao
  },
};

pessoa.falar();
const falar = pessoa.falar;
falar(); //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa); // isso faz com que pessoa passe a ser chamado como o objeto "pessoa.saudacao" o bind aponta sempre para o componente dentro dele mesmo---
falarDePessoa();
