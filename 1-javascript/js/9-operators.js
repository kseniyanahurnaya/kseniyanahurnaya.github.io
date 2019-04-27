'use strict'

let liczba1 = 8, liczba2 = 3;

let wynik;

wynik = liczba1 % liczba2;
console.log(wynik);

// liczba1 =  liczba1+100;
liczba1 += 100;
liczba1 += 200;
console.log(liczba1);

// operatory porównania 

if ("2" === 2) {
    console.log("prawda");

} else {
    console.log("nie prawda")
}

//logika

if ( !( ("2" !==  2) && (8 < 4))) {
    document.write("<br> prawda");
}

let wynikLogiczny = (3>5) ? "prawda" : "fałsz";
console.log(wynikLogiczny);
