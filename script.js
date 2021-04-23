// [Snack 1]
// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varieta,
// peso e lunghezza. 
var zucchine = [

    //[0]
    {
        varieta: 'zucchina nana',
        peso: 0.30,
        lunghezza: 10
    },
    //[1]
    {
        varieta: 'zucchina giga',
        peso: 2.50,
        lunghezza: 50
    },
    //[2]
    {
        varieta: 'zucchina verde',
        peso: 1.50,
        lunghezza: 18
    },
    //[3]
    {
        varieta: 'zucchina gialla',
        peso: 0.60,
        lunghezza: 14
    },
    //[4]
    {
        varieta: 'zucchina verdone',
        peso: 0.55,
        lunghezza: 11
    },
    //[5]
    {
        varieta: 'zucchina trombetta',
        peso: 1.0,
        lunghezza: 25
    },
    //[6]
    {
        varieta: 'zucchina tonda',
        peso: 1.5,
        lunghezza: 16
    },
    //[7]
    {
        varieta: 'zucchina ovale',
        peso: 0.75,
        lunghezza: 08
    },
    //[8]
    {
        varieta: 'zucchina mega',
        peso: 0.90,
        lunghezza: 86
    },
    //[9]
    {
        varieta: 'zucchina piccoletta',
        peso: 0.15,
        lunghezza: 10
    }
]
console.log(zucchine);
//Calcola quanto pesano tutte le zucchine.
var pesoTotale = 0;

for (var i = 0; i < zucchine.length; i++) {
    var pesoSingolo = zucchine[i].peso;

    pesoTotale += pesoSingolo;
}
console.log("Le zucchine tutte insieme pesano ", pesoTotale, "kg");




// [Snack 2]
// Crea 10 oggetti che rappresentano una zucchina.
// Sto utilizzando array zucchine precedentemente creato.

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.

var zucchineBig = [];
var zucchineSmall = [];

for (var i = 0; i < zucchine.length; i++) {
    var lunghezzaSingola = zucchine[i].lunghezza;
    if (lunghezzaSingola > 15) {
        zucchineBig.push(zucchine[i]);
    } else {
        zucchineSmall.push(zucchine[i]);
    }
}
console.log(zucchineBig, zucchineSmall);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var pesoZucchineBig = 0;
var pesoZucchineSmall = 0;
for (var i = 0; i < zucchineBig.length; i++) {
    var pesoSingolo = zucchineBig[i].peso;
    pesoZucchineBig += pesoSingolo;
}
console.log("Le zucchine tutte insieme pesano ", pesoZucchineBig, "kg");

for (var i = 0; i < zucchineSmall.length; i++) {
    var pesoSingolo = zucchineSmall[i].peso;
    pesoZucchineSmall += pesoSingolo;
}
console.log("Le zucchine tutte insieme pesano ", pesoZucchineSmall, "kg");

// l'esercizio è completo, provo a scrivere una funzione per calcolo peso:

// function pesoTotale(gruppo) {
//     var peso = null;
//     for(var i = 0; i < zucchineSmall; i ++)


// }