'use strict';

let mainHeader = document.getElementById('header');
// console.log(mainHeader);

console.log(mainHeader.innerHTML);
console.log(mainHeader.innerText);
console.log(mainHeader.outerHTML);

mainHeader.id = "nowe-id";
console.log(mainHeader.outerHTML);

mainHeader.setAttribute("class","header");
mainHeader.className=("nowa-klassa");
console.log(mainHeader.outerHTML);

let klassy = mainHeader.className;

// mainHeader.classList.add("active");
// console.log(mainHeader);

// mainHeader.classList.remove("active");
// console.log(mainHeader);

let zmienKolor = document.getElementById("toggle");
zmienKolor.addEventListener("click", () => {
    zmienKolor.classList.toggle("active");
});

zmienKolor.style.color = "red";
zmienKolor.style.backgroundColor = "pink";