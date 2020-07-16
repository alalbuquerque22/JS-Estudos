{
        function imprimeSoma(a,b){
        console.log(a+b)
    }

    imprimeSoma(2,3)//resultado 5
    imprimeSoma(2)// resultdo nan
    imprimeSoma(2,3,2,3) //resultado 5
    imprimeSoma()//resultado nan
}

{
    function soma(a,b =0){
        return a+b

    }
    console.log(soma(2,4)); // soma dentro de console log pois a funcao soma retorna algum valor // resultado 6
    console.log(soma(2)); // resultado 2 pois b= 0 dentro de funcao
    console.log(soma());// NaN pois o primeiro parametro da funcao nao recebe nenhum valor  


}