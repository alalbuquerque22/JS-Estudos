//exemlo de callback  no navegador


//nao é necessario declarar o evento na funcao 
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log("O evcento ocorreu")
}