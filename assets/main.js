/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60


PRO TIP:
prima di iniziare a scrivere codice, inizia con l'elencare gli strumenti da usare per svolgere la consegna 
e scoponi  il problema di sotto-task da svolgere. Questo ti aiuta a documentare il tuo flusso di lavoro ed il codice evitandoti 
di restare li a fissare una pagina vuota.

*/


/*
TOOL:
- Variabili let / const
- prompt()
- Operazioni matematiche (*, -)
- if / else if / else
- .toFixed(2)
- console.log()
*/

/* Inizializzo le variabili necessarie */

// Creo una variabile per salvare i chilometri da percorrere
// Creo una variabile per salvare l’età del passeggero
let km = prompt('Quanti chilometri vuoi percorrere?');
let age = prompt('Quanti anni hai?');

/* Calcoliamo il prezzo base del biglietto */

// Creo una costante per il prezzo per km (0.21 €)
// Calcolo il prezzo base moltiplicando i km per 0.21
const priceKm = 0.21;
let priceBase = km * priceKm;

/* Applichiamo eventuali sconti in base all’età */

// Se l’età è minore di 18 -> applico sconto 20%
if (age < 18) {
priceFinal = (priceBase / 100)*20;
console.log('Hai diritto a uno sconto del 20%.');
}

// Se l’età è maggiore o uguale a 65 -> applico sconto 40%
else if (age >= 65) {
priceFinal = (priceBase / 100)*60;
console.log('Hai diritto a uno sconto del 40%.');
}

// Altrimenti -> nessuno sconto
else {
priceFinal = priceBase;
console.log('Nessuno sconto applicato.');
}

/* Formattiamo e stampiamo il prezzo finale */

// Arrotondo il prezzo finale a due decimali
// Stampo il prezzo finale in console con due cifre decimali
console.log('Il prezzo finale del biglietto è: €' + priceFinal.toFixed(2));