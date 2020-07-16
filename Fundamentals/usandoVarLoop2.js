const funcs =[]
for (var i =0; i <10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]();
funcs[8]();

// ira imprimir todos com i=10 pois var é escopo global