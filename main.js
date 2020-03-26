// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova


// Chiedi all’utente il cognome
var cognomeUtente = prompt("Scrivi il tuo cognome");

// inseriscilo in un array con altri cognomi
var cognomi = ["Boi", "Ennas", "Collu", "Aru", "Desu", cognomeUtente];

console.log(cognomi);

// Ordina la lista alfabeticamente

cognomi.sort();


// Stampa la lista in ordine alfabetico + la posizione in cui si trova l'utente
 var indice = cognomi.indexOf(cognomeUtente);

 var posizione = indice + 1;

 document.getElementById("demo").innerHTML = cognomi + " La posizione del tuo cognome è " + posizione;
