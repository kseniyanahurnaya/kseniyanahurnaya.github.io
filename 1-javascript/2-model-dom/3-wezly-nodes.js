'use strict';

let pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);


// childNodes-wszystkie elementy
console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.childNodes[1]);

// children-glowne el
console.log(pierwszyDiv.children);



console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

let pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyChild.nextSibling);

// pobiera nastepny element
console.log(pierwszyChild.nextElementSibling.nextElementSibling);

let szostyChild = pierwszyDiv.childNodes[6];
console.log(szostyChild);
console.log(szostyChild.previousSibling);