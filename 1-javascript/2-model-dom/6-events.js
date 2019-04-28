'use strict';

let parSecond = document.querySelector("#parSecond");
console.log(parSecond);

// const klikAlert = () => {
// alert("klikniento diva");
// }
const klikAlert = (e) => {
    alert('klikniento diva');
    console.log(e);
}

// uruchamia sie w momeccie klikniencia FUNKCJA CALLBACK
// parSecond.onclick = klikAlert;

// uruchamia sie w momencie ladowania
// parSecond.onclick = klikAlert();

parSecond.addEventListener('click', klikAlert);

// parSecond.addEventListener('dblclick', () => {
// alert('funkcja anonimowa CLICK')
// });

// parSecond.removeEventListener('dblclick', klikAlert);

let parWParSecond = document.getElementById("parWParSecond");
console.log(parWParSecond);

const klikDiv = (e) => {
    console.log('kliknieto div');
}

const klikParagraf = (e) => {
    e.stopPropagation();
    console.log("klikniento paragfraf");
}

parSecond.addEventListener("click", klikDiv);
parWParSecond.addEventListener("click", klikParagraf);