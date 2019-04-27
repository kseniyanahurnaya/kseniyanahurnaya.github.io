'use strict'

let wzrostMateusz = 190;
let wzrostOlgi = 190;

if (wzrostOlgi > wzrostMateusz) {
    console.log("Olga jest wyzsza ;) ");
} 
else if (wzrostOlgi == wzrostMateusz) {
    console.log("olga jest rowna");
}
 else {
    console.log("olga jest nizsza");
}


let kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
      console.log('Kolor czerwony')
      break;
    case 'zielony':
    console.log('Kolor zielony')
      break;
      case 'niebieski':
    console.log('Kolor niebieski')
      break;
      default:
    console.log('Inny kolor')
}