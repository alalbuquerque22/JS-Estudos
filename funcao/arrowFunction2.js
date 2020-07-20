function Pessoa(){
    this.idade = 0

    setInterval(()=> {
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa

// essa funcao e uma arrow function que se refere ao arquivo thisEBind2.js  , porem usase uma A F dentro do contexto Lexico Pessoa
