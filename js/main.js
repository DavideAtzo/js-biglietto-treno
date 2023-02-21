'use strict';

//l'utente potrà inserire gli input grazie al prompt
const km = Number(prompt('inserire i km che vorresti fare'))
const etaUtente = Number(prompt('inserire la tua eta'))
console.log(km);
console.log(etaUtente);


// Calcolo biglietto
const prezzoAlKm = 0.21;
let prezzoBiglietto= km * prezzoAlKm;
console.log(prezzoBiglietto);

// variabili sconto del biglietto 
const minorenne = 18;
const over65 = 65;

if(etaUtente < 18)
prezzoBiglietto = prezzoBiglietto * 20 / 100;

else if(etaUtente >= 65)
prezzoBiglietto = prezzoBiglietto * 40 / 100;

// Inerisco i dati negli id per la visualizzazione degli input
document.getElementById('km').innerHTML = km;
document.getElementById('eta-utente').innerHTML = etaUtente;
document.getElementById('prezzo-biglietto').innerHTML = prezzoBiglietto.toFixed(2);

