'use strict'


let przycisk = document.querySelector("#formularz");
console.log(przycisk);

przycisk.addEventListener('click', () => {

    let imie = document.getElementsByName("fname")[0].value;
console.log(imie);

let nazwisko = document.getElementsByName("lname")[0].value;
console.log(nazwisko);

});

przycisk.addEventListener('click', function() {
event.stopPropagation();
});

