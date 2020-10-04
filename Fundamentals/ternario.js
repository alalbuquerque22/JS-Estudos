const resultado = (nota) => (nota >= 7 ? "aprovado" : "reprovado");
const resultado2 = (nota) => (nota = 5 ? "recuperacao" : "reprovado");
// variavel , funcao (arrow), expresao  ? condicao true : condicao false

function getFee(isMember) {
  return isMember ? "R$2.00" : "R$12.00";
}

{
  //condicao ternaria em chave
  function example() {
    return condicao1
      ? valor1
      : condicao2
      ? valor2
      : condicao3
      ? valor3
      : valor4;
  }
  //equivalencia em if
  function example() {
    if (condicao1) {
      return valor1;
    } else if (condicao2) {
      return valor2;
    } else if (condicao3) {
      return valor3;
    } else valor4;
  }
}
console.log(resultado(7.1));
console.log(resultado2(5));

console.log(getFee(true));
//resultado esperado... R$2.00

console.log(getFee(false));
//resultado esperado... R$12.00

console.log(getFee(null));
//resultado esperado... R$12.00
