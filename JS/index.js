'use strict';

let timerGiallo;
let timerRosso;

function resetSemaforo() {
    document.getElementById("rosso").classList.remove("semaforoRosso");
    document.getElementById("giallo").classList.remove("semaforoGiallo");
    document.getElementById("verde").classList.remove("semaforoVerde");
}

function start() {
    clearTimeout(timerGiallo);
    clearTimeout(timerRosso);
    resetSemaforo();
    document.getElementById("verde").classList.add("semaforoVerde");
    timerGiallo = setTimeout(() => {
        document.getElementById("giallo").classList.add("semaforoGiallo");
        timerRosso = setTimeout(() => {
            resetSemaforo();
            document.getElementById("rosso").classList.add("semaforoRosso");
        }, 2000);
    }, 5000);
}
