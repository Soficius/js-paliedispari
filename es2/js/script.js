//! Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// ! eseguo codice senza funzioni
const playerDecision = prompt('Scegli pari o dispari (scrivilo)')

let num = 0
while( num < 1 || num > 5){
    num = parseInt(prompt('Inserisci un numero da 1 a 5'))
}
const random = Math.floor(Math.random() * (5 - 1 + 1) + 1)
const result = num + random
const isPari = result % 2 === 0
const playerBetPari = playerDecision === 'pari'

if((playerBetPari && isPari) || (!playerBetPari && !isPari)){
    alert('Vince il Player')
} else{
    alert('Vince il Pc')
}
