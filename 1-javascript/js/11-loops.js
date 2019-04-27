'use strict'

// for (let i=10; i>0; i--) {
//     console.log(i);
// }

let tablica = ["Krystian", "Monika", "Danuta"];
for (let i=0; i < tablica.length; ++i) {
    console.log(tablica[i]);
}


// const iteruj = (element, index) => {
//     console.log("Element z indexem: " + index + " ma wartość " + element);
// }

tablica.forEach ( ( element, index ) => {
    console.log("Element z indexem: " + index + " ma wartość " + element);
});

let person = {
    name: 'Krystian',
    age: 35
}

for(let key in person) {
    console.log(person[key]);

}

let iterable = [10, 20, 30];

for (let value of iterable) {
    value += 1;
    console.log(value);
}

let it = 0;
while ( it < 10) {
    console.log(it);
    it++;
}

let iter = 20;
do {
    iter++;

} while ( iter < 10);