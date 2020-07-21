
//definisco livello di difficoltà
//i livelli sono dinamici, si possono aggiungere altri livelli e le relative mine
var listaLivelli = [100, 80, 50, 5]
var livelloMine = [16, 16, 16, 4]

//chiedo scelta del livello all'utente e faccio i controlli sui dati inseriti
var sceltaLivello = parseInt(prompt('Inserisci il livello di difficoltà tra 0 e ' + (listaLivelli.length - 1)));
while (isNaN(sceltaLivello) == true || sceltaLivello < 0 || sceltaLivello >= listaLivelli.length) {
    sceltaLivello = parseInt(prompt('ATTENZIONE il valore inserito non è corretto. Inserisci il livello di difficoltà tra 0 e ' + (listaLivelli.length - 1)));
}
var livello = listaLivelli[sceltaLivello];
var numMine = livelloMine[sceltaLivello];
console.log('livello scelto: ' + sceltaLivello);
console.log('il livello scelto corrisponde a: ' + livello + ' numeri ed a ' + numMine + ' mine.');

//genero 16 numeri casuali x defnire le 'mine'
var mine = [];
var nuovoNumero;
while (mine.length < numMine) {
    nuovoNumero = (random(1, livello))
    if (trovaElemento(mine, nuovoNumero) == false) {
        mine.push(nuovoNumero);
    }
}
console.log('mine', mine);
//chiedo all'utente di inserire i numeri
var numeriUtente = [];
var risultato = false;
var maxGiocate = livello - numMine;
var nuovoNumUtente
while (numeriUtente.length < maxGiocate && risultato == false) {
    //prompt per inserimento numeri utente
    nuovoNumUtente = parseInt(prompt('inserisci un numero da 1 a ' + livello));
    //controllo dati inseriti dall'utente
    while (isNaN(nuovoNumUtente) == true || nuovoNumUtente < 1 || nuovoNumUtente > livello) {
        nuovoNumUtente = parseInt(prompt('ATTENZIONE il valore inserito non è corretto. Inserisci un numero da 1 a ' + livello));
    }
    //controllo che il numero non sia già stato inserito in precedenza
    if (trovaElemento(numeriUtente, nuovoNumUtente) == false) {
        numeriUtente.push(nuovoNumUtente);
    } else {
        alert('ATTENZIONE! Numero già inserito in precedenza.')
    }
    //controllo se il numero inserito dall'utente è tra le 'mine'
    risultato = trovaElemento(mine, nuovoNumUtente)
}
console.log('numeri utente', numeriUtente);

//restiuisco risultati del gioco
if (risultato == true) {
    //se il risultato è true vuol dire che l'ultimo numero è stato trovato nelle mine, quindi l'utente ha perso
    console.log('HAI PERSO! Sei arrivato al livello ' + (numeriUtente.length - 1) + ' di ' + maxGiocate);
    alert('HAI PERSO! sei arrivato al livello ' + (numeriUtente.length - 1) + ' di ' + maxGiocate);
} else {
    //se il risultato è false nessun numero è stato trovato nelle mine, quindi ha vinto
    console.log('HAI VINTO! Hai completato tutti i ' + maxGiocate + ' livelli');
    alert('HAI VINTO! hai completato tutti i ' + maxGiocate + ' livelli');
}





////////// FUNZIONI ///////////////////////////////////

//funzione numero random
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso 
}

//funzione trova duplicati
function trovaElemento(lista, elemento) {
    var i = 0;
    while (i < lista.length) {
        if (elemento == lista[i]) {
            return true; //restituisce true se trova l'elemento
        }
        i++;
    }
    return false; //restituisce true se NON trova l'elemento
}


