'use strict'

let kaja = {
    imie: "Kaja",
    wzrost: 152,
    przedstawOsobe() {
        console.log(this.imie);
    }
}

// let krystian = {
//     imie: "Krystian",
//     wzrost: 182,
//     przedstawOsobe() {
//         console.log(this.imie);
//     }
// }

// kaja.przedstawOsobe();
// krystian.przedstawOsobe();

// console.log(kaja['wzrost']);

// kaja.wzrost = 200;

// console.log(kaja);

let moneataZl = {
    promien: 20,
    nominal: 100,
    waga: 50,
    material: "zloto"

}

console.log(moneataZl.material);

class Osoba {
    constructor(imie, nazwisko, wzrost, oczy) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost = wzrost;
        this.oczy = oczy;
    }



wyswietlInfo () {
    console.log("Imię:" + this.imie + "/n"+
    "Nazwisko:" + this.nazwisko + "/n" +
    "Wzrost: " + this.wzrost + "/n" +
    "Oczy: "+ this.oczy);
}
}
let krystian = new Osoba('Krystian', 'Dziopa', 180, 'niebieskie');
console.log(krystian);

let andrzej = new Osoba('Andrzej', 'Ktoś', 179, 'niebieskie');
console.log(andrzej);