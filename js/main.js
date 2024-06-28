'use strict';

const miJugada = document.querySelector(".js_select");
const btnPlay = document.querySelector(".js_button_play");
const result = document.querySelector(".js_result");
const consoleResult = document.querySelector(".js_console_result");
const btnReiniciar = document.querySelector(".js_button_reiniciar");

function getRandomNumber(max) {
    console.log(max);
    return Math.ceil(Math.random() * max);
  }; 



//const getNumber = getRandomNumber(9);
//console.log("prueba: " + getNumber);

const spanResultJugador = document.querySelector(".js_resultado_jugador");
const spanResultCompu = document.querySelector(".js_resultado_compu");

let puntoJugador = 0; 
let puntoConsola = 0; 
const finalResult = document.querySelector(".js_final_result");

function hasGanado () {
    spanResultJugador.innerHTML = ++puntoJugador; // (otra forma) puntojugador = puntojugador+1;
    if (puntoJugador === 10) {
        finalResult.innerHTML = "¡Has ganado!";
        btnPlay.style.display = 'none';
        btnReiniciar.style.display = "block";
    }
};

function hasPerdido () {
    spanResultCompu.innerHTML = ++puntoConsola;
    if (puntoConsola === 10) {
        finalResult.innerHTML = "¡Ha ganado la consola!";
        btnPlay.style.display = 'none';
        btnReiniciar.style.display = "block";
    }
};

function handleClick() {
    let getNumber = getRandomNumber(9);
    
    console.log(getNumber);
    if (getNumber <= 3) {
        //la consola es piedra
        consoleResult.innerHTML = "La consola seleccionó piedra";
       if (miJugada.value === "piedra") {
            result.innerHTML = "¡Empate!";
       } 
       else if (miJugada.value === "papel") {
            result.innerHTML = "¡Has ganado!";
            hasGanado();
       }
        else {
            //soy tijera
            result.innerHTML = "¡Has perdido!";
            hasPerdido()
       }
    } 
    else if (getNumber >= 4 && getNumber <= 6) {
        //la consola es papel 
        consoleResult.innerHTML = "La consola seleccionó papel"
        if (miJugada.value === "piedra") {
            result.innerHTML = "¡Has perdido!";
            hasPerdido();
        } 
        else if (miJugada.value === "papel") {
            result.innerHTML = "¡Empate!";
        } 
        else {
            //soy tijera
            result.innerHTML = "¡Has ganado!";
            hasGanado();
        }
    }
    else {
        //la consola es tijera
        consoleResult.innerHTML = "La consola seleccionó tijera";
        if (miJugada.value === "piedra") {
            result.innerHTML = "¡Has ganado!";
            hasGanado();
        } 
        else if (miJugada.value === "papel") {
            result.innerHTML = "¡Has perdido!";
            hasPerdido();
        } 
        else {
            //soy tijera
            result.innerHTML = "¡Empate!";
        }

    }
    console.log(getNumber);
};



function resetGame() {
    location.reload(); 
};

btnReiniciar.addEventListener("click", resetGame);

btnPlay.addEventListener("click", handleClick);