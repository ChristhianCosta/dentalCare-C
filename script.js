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
    contadord1++;

    if(contadord1 == 1){
        depoimento1.style="transform: translateY(-100vh);"

    } else if(contadord1 == 2){
        depoimento1.style="transform: translateY(-200vh);"

    } else if(contadord1 == 3){
        depoimento1.style="transform: translateY(-300vh);"

    } else {
        contadord1 = 0;
        depoimento1.style="transform: translateY(0);"

    }

}

const depoimento2 = document.getElementById("segundo")
const depoimento2larg = depoimento1.querySelector('div').length;
var contadord2 = 0;
function comment2(){
    console.log(depoimento2larg)
    contadord2++;

    if(contadord2 == 1){
        depoimento2.style="transform: translateY($'{}');"

    } else if(contadord2 == 2){
        depoimento2.style="transform: translateY();"

    } else if(contadord2 == 3){
        depoimento2.style="transform: translateY();"

    } else {
        contadord2 = 0;
        depoimento2.style="transform: translateY(0);"

    }

}