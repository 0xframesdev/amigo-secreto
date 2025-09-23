let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    console.log(numeroSecreto);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Felicidades! Adivinaste el número secreto en ${intentos} ${intentos=== 1 ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').disabled = false;
    } else {
        if (numeroUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es mayor. Intenta de nuevo.');
        } else {
            asignarTextoElemento('p', 'El número secreto es menor. Intenta de nuevo.');
        }
        intentos++;
        limpiarCajaTexto();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    // Si el numero ya fue sorteado, generar otro
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya se sorteo todos los numeros posibles
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', '¡Has adivinado todos los números posibles! Reiniciando el juego.');
        //listaNumerosSorteados = [];
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    limpiarCajaTexto();
    condicionesIniciales();
    document.getElementById('reiniciar').disabled = true;

}

function limpiarCajaTexto() {
    document.querySelector('#valorUsuario').value = '';
}   

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Adivina el número secreto entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
}

condicionesIniciales();