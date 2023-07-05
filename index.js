let contadorSegundos = 1
let segundos = document.getElementById('segundos')

let contadorMinutos = 1
let minutos = document.getElementById('minutos')

let contadorHoras = 1
let horas = document.getElementById('horas')

function segundosTime(){
    segundos.innerText = contadorSegundos
    if(contadorSegundos === 59){
        contadorSegundos = 0
    }else{
        contadorSegundos++
    }
    
}

setInterval(segundosTime, 1000)

function minutosTime(){
    minutos.innerText = contadorMinutos
    contadorMinutos++
}

setInterval(minutosTime, 60000)

function horasTime(){
    horas.innerText = contadorHoras
    contadorHoras++
}

setInterval(horasTime, 3600000);