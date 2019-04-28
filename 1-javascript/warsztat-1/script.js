'use strict';

let przycisk = document.querySelector("#przyciskZmien");
console.log(przycisk);


przycisk.addEventListener('click', () => {
    let pJeden = document.querySelector("#firstPar");
    console.log(pJeden);

    let pDwa = document.querySelector("#secondPar");
    console.log(pDwa);

    pJeden.style.backgroundColor = "red";
    pDwa.style.backgroundColor = "yellow";

});