{
    {
        {
            {
                var sera = 'sera?'
            }
        }
    }
}
console.log(sera);
//conseguimos imbprimir var pobis ele pobssui escopo global

function teste(){
    var local=123
    console.log(local)
}

teste(); //imprimi valor de dentro da funcao
console.log(local);// erro!! nao consegue imprimir uma variavel declarada dentro do escopo de uma funcao 