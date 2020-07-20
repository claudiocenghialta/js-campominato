
//definisco livello di difficoltà
var livelliDisponibili = [0, 1, 2]
var livello = parseInt(prompt('Inserisci il livello di difficoltà 0, 1, 2'));
//controllo dati inseriti dall'utente
var checkLivello = checkLivello = trovaElemento(livelliDisponibili, livello)
while (isNaN(livello) == true || checkLivello == true) {
    checkLivello = trovaElemento(livelliDisponibili, livello)
    nuovoNumUtente = parseInt(prompt('ATTENZIONE il valore inserito non è corretto. Inserisci il livello di difficoltà 0, 1, 2'));
}
console.log(livello);

if (livello == 0) {
    livello = 100;
} else if (livello == 1) {
    livello = 80;
} else {
    livello = 50;
}
console.log(livello);
var numMine = 3;

//genero 16 numeri casuali x defnire le 'mine'
var mine = [];
while (mine.length < numMine) {
    var nuovoNumero = (random(1, livello))
    var trovato = trovaElemento(mine, nuovoNumero);
    if (trovato != true) {
        mine.push(nuovoNumero);
    }
}
mine.sort;
console.log('mine', mine);
//chiedo all'utente di inserire i numeri
var numeriUtente = [];
var risultato = false;
var maxGiocate = livello - numMine;
while (numeriUtente.length < maxGiocate && risultato == false) {
    //prompt per inserimento numeri utente
    var nuovoNumUtente = parseInt(prompt('inserisci un numero da 1 a ' + livello));
    //controllo dati inseriti dall'utente
    while (isNaN(nuovoNumUtente) == true) {
        nuovoNumUtente = parseInt(prompt('ATTENZIONE il valore inserito non è corretto. Inserisci un numero da 1 a ' + livello));
    }
    //controllo che il numero non sia già stato inserito in precedenza
    var trovatoNumUtente = trovaElemento(numeriUtente, nuovoNumUtente);
    if (trovatoNumUtente != true) {
        numeriUtente.push(nuovoNumUtente);
    }
    //controllo se il numero inserito dall'utente è tra le 'mine'
    risultato = trovaElemento(mine, nuovoNumUtente)
}
console.log(numeriUtente);

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


