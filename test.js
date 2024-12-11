// 1;  boolean,number,string
2;
var isnumber = 2;
var isstring = 'ciao';
var isboolean = true;
3;
var greet = function (name) {
    return 'Ciao' + name;
};
console.log(greet('Mario'));
4;
var sum = function (a, b) {
    return a + b;
};
console.log('Somma:', sum(17, 80));
5;
var calcoloiva = function (prezzo) {
    var iva = 0.22;
    var calcolototale = prezzo + prezzo * iva;
    return calcolototale;
};
console.log('Calcolo IVA (su 100):', calcoloiva(100));
6;
var uni = 'cipo';
var te = 'lle';
var insieme = function (uni, te) {
    return uni + te;
};
console.log("Concatenazione: ".concat(insieme(uni, te)));
//  7; con type union possiamo uniri piu tipi e possiamo segliere
// tra i tipi primitivi principali (string,boolean,ecc..)
8;
var variable = 10;
console.log('Variable:');
9;
10;
var numbers = [1, 2, 3];
var numbero = [1, 2, 3];
11;
var strano = [
    'Daniel',
    'Marco',
    'Zampa',
    100,
    40,
];
console.log('Strano tuple:', strano);
// 12;le interfacce servono per indicarci la forma degli oggetti,
// i type si utilizzano sopratutto per le unioni di tipi ptimitivi
13;
14;
15;
console.log('Student:');
16;
17;
var miaAuto = {
    auto: {
        motore: 'MultiJet',
        gomme: '18 pollici',
        marca: 'Alpha Romeo',
    },
};
console.log('Mia Auto:', miaAuto);
// 18;genercis è un dato passato come parametro per una interfaccia
// serve per rendere piu generico,riutilizzabile un interfaccia
// 19;Sì, in TypeScript è possibile avere più tipi generici in un'interfaccia.
// quest oserve quando vuoi che la tua interfaccia sia piu generica quindi puoi passare piu tipi
20;
