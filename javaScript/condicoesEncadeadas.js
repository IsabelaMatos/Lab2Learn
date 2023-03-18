//--------------------------------------------
// Testando Sensor

/*
let sensor = 0

if(sensor == 1){
    ligar()
}
else{
    desligar()
}


function ligar(){
    console.log("Liga o Motor")
}

function desligar(){
    console.log("Desliga o Motor")
}

*/
//-------------------------------------------


function mudarCor(cor){
    console.log(`Agora a cor é ${cor}`)
}

function ligaLampada(){
    console.log("Lâmpada Ligada")
}

function desligaLampada(){
    console.log("Lâmpada desligada")
}




/*
SINAIS DE COMPARAÇÃO

Comparar se é igual:            ==
Comparar se é diferemte:        !=
Compara se é Maior:             >
Compara se é Menor:             <
Compara se é Menor ou Igual:    <=
Compara se é Maior ou Igual:    >=

Dupla checagem:
AND (E):    &&
OR  (OU):   ||


*/


var sensorPresenca = 1
var sensorLuz = 0

if (sensorPresenca == 1 && sensorLuz == 0) {
    console.log("Ligar Luz")
    
} else {
    console.log("Não ligar luz")
    
}

/*

if (sensorPresenca == 1) {

    if (sensorLuz == 1) {
        console.log("Ligar")
    } else {
        console.log("Desligar")
    }
    
} else {
    console.log("Desligar")   
}

*/




