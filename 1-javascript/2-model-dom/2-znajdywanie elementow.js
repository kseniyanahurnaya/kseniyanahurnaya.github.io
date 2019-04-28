'use strict'

let parFirst = document.getElementById('parFirst');
console.log(parFirst);



let linki = document.getElementsByClassName('superlink');
console.log(linki);



// pobiera sie klasa elemnetow6 jak chcesz 1,to robisz pętle

let linkPoTagu = document.getElementsByTagName('a');
console.log(linkPoTagu);



// querySelector zawsze pobiera pierwszy element z klassy

let pierwszyLinkPoSelectorze = document.querySelector('.superlink');
console.log(pierwszyLinkPoSelectorze);



let linkiPoSelectorze = document.querySelectorAll('.superlink');
console.log(linkiPoSelectorze);



linkiPoSelectorze.forEach( (link,i) => {
    console.log(link.outerHTML);
});
