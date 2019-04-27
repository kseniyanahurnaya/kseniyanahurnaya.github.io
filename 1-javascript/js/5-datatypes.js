'use strict';

// typ liczbowy

let wyplata = 5000;
let premia = 2500;
let calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

// typ lancuchowy

let wyplataStr = "5000";
let premiaStr = "2500";
let calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr;

console.log(calkowitaWyplataStr);

// typ logiczny

let czuJestSmog;
czuJestSmog = false;

if(czuJestSmog) {
    console.log("Jest Smog");
} else {
    console.log('Nie ma smogu');
}

// typ specjalne

let nieZdefiniowanaZmienna;
let nullowaZmienna = null;

console.log(nieZdefiniowanaZmienna);
console.log(nullowaZmienna);

// znaki specjalne

let imieStudenta = 'Michal "Kroszka"' ;
console.log(imieStudenta);


// typ zmienne

let nazwisko = "Kroszka";
let imie = `Michal ${nazwisko}` ;
console.log(imie);


