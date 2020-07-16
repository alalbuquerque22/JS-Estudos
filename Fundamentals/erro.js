function tratarErroELancar(erro){
    //throw new Error('....')// estancia uma tratativa de erro  
    // throw 10    
    // throw true    
    // throw 'mensagem'   
     throw {
         nome: erro.name,
         msg:erro.message,
         date : new Date
     }   
//essa funcao trata o catch 
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase()+ '!!!')
        }
        catch (e){
            tratarErroELancar(e) 
            // podese responder o usario dentro de catch 
        }finally{
            console.log('Imprime mesmo nao passando na tratativa Try')
        }
}

const obj = {nome: 'Andre'}// o objeto esta com "nome" para forcar o erro na tratativa com try/catch
imprimirNomeGritando(obj)