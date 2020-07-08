    function compras(trabalho1,trabalho2){
        const comprarSorvete = trabalho1 || trabalho2
        const comprarTv50 = trabalho1 && trabalho2
      //  const comprarTv32 =!!( trabalho1^ trabalho2)//bitwise XOR
        const comprarTv32 = trabalho1   != trabalho2
        const manterSaudavel = !comprarSorvete //operador unario

        return{comprarSorvete,comprarTv50,comprarTv32,manterSaudavel}
    }

    console.log('situacao1 ',compras(true,true))
    console.log('situacao2 ',compras(true,false))
    console.log('situacao3 ',compras(false,true))
    console.log('situacao4 ',compras(false,false))