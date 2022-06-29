//! Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// ! eseguo codice senza funzioni
// 1. chiedo all'utente di scegliere pari o dispari
// 2. chiedo all'utente di inserire un numero da 1 a 5 (contitnuo a chiederglielo finche non è un numero compreso tra 1 e 5 (uso while))
// 3. Genero un numero random per il computer tra 1 e 5
// 4. sommo i due numeri
// 5. controllo se la somma è pari e mi salvo il risultato in una costante
// 6. controllo se la decisione dell'utente è pari per decidere se ha scommesso su pari o dispari
// 7. controllo se vince il player o il pc

// const playerDecision = prompt('Scegli pari o dispari (scrivilo)')

// let num = 0
// while( num < 1 || num > 5){
//     num = parseInt(prompt('Inserisci un numero da 1 a 5'))
// }
// const random = Math.floor(Math.random() * (5 - 1 + 1) + 1)
// const result = num + random
// const isPari = result % 2 === 0
// const playerBetPari = playerDecision === 'pari'

// if((playerBetPari && isPari) || (!playerBetPari && !isPari)){
//     alert('Vince il Player')
// } else{
//     alert('Vince il Pc')
// }

//! eseguo codice con funzione
const playerDecision = prompt('Scegli pari o dispari (scrivilo)')

let num = 0
while( num < 1 || num > 5){
    num = parseInt(prompt('Inserisci un numero da 1 a 5'))
}

function getNumberRange(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const result = num + getNumberRange(1,5)

function isPari (num){
    return num % 2 === 0
}

const resIsPari = isPari(result)
const playerBetPari = playerDecision.toLowerCase() === 'pari'

if((playerBetPari && resIsPari) || (!playerBetPari && !resIsPari)){
    alert('Vince il Player')
} else{
    alert('Vince il Pc')
}
