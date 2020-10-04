//pessoa -> 123 -> {...}

const pessoa = { nome: "joao" };
pessoa.nome = "pedro";
console.log(pessoa);

//pessoa ->456 -> {...}
//pessoa = { nome:'Ana'} // erro!!: devido estar apontando para pessoa, pessoa é uma constante

Object.freeze(pessoa);

pessoa.nome = "Maria";
pessoa.end = "rua ABC";
delete pessoa.nome;
//todas as funcoes acima sao ignoradas devido a FUNCAO FREEZE

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "Joao" });
pessoaConstante.nome = "Maria";
console.log(pessoaConstante);
