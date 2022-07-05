const slides = document.getElementById("gancho")
var contador = 0;
function desliza(){
    contador++;

    if(contador == 1){
        slides.style="margin-left:-25%;"

    } else if(contador == 2){
        slides.style="margin-left:-50%;"

    } else if(contador == 3){
        slides.style="margin-left:-75%;"

    } else {
        contador = 0;
        slides.style="margin-left:0;"

    }
}
setInterval(desliza, 7000);

document.getElementById("direita").addEventListener("click",desliza)
document.getElementById("esquerda").addEventListener("click",
function teste(){
    contador = contador-2;
    desliza()
}
)

const depoimento1 = document.getElementById("primeiro")
const depoimento1larg = depoimento1.querySelector('div').length;
var contadord1 = 0;
function comment(){
    console.log(depoimento1larg)
    /*contadord1++;

    if(contadord1 == 1){
        depoimento1.style="margin-top:-25%;"

    } else if(contadord1 == 2){
        depoimento1.style="margin-top:-50%;"

    } else if(contadord1 == 3){
        depoimento1.style="margin-top:-75%;"

    } else {
        contadord1 = 0;
        depoimento1.style="margin-top:0;"

    }*/

}