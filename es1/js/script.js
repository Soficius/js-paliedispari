// !Domande da farsi quando scriviamo una funzione
// ?1 - Come la chiamo?
// ?2 - Ho bisogno di parametri? (se si quali?)
// ?3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
// ?4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?)


// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. devo chiedere all'utente si inserire una parola, quindi mi serve una costante e un prompt
// 2. devo dire alla mia funzione di controllare se la parola inserita è palindroma 
// 3. per far ciò la parola inserita deve leggersi ugualmente anche al contrario es: anna
// 4. restituisco il risultato (true or false) nel caso sia palindroma o meno

//! codice eseguito senza l'uso di funzioni
//* const word = prompt('Inserisci una parola');
//* let reverseWord = '' 

//* for(let i = word.length-1; i>= 0; i--){
//*     reverseWord += word[i]
//* }
//* console.log('reverseWord:', reverseWord)
//* if(word === reverseWord ){
//*     alert('la parola inserita è palindroma')
//* } else{
//*     alert('la parola inserita non è palindroma')
//* }

// ! stesso codice da eseguire con funzioni