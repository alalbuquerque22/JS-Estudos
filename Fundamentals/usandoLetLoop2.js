const funcs =[]
for (let i =0; i <10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]();
funcs[8]();

// ira imprimir  i = 2 
// e ira imprimir i = 8
//