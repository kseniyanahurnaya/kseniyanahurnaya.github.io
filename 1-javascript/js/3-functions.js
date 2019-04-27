console.log('działa');

const PI = 3.14;
//ES5
// function poleKola(r) { 
//     let poleKola = PI *r *r;

//     console.log(poleKola)

// }

// poleKola(25);

// poleKola(50);

// poleKola(100);

// let rDuzego = 108;
// poleKola (rDuzego);

//ES6
const poleKola = (r, x) => {
    let poleKola = x * PI * r * r;

    return poleKola;
}
let rDuzego = 108;

poleKola(13);
let wynikDzilaniaFunkcji = poleKola(rDuzego, 10);

alert(wynikDzilaniaFunkcji);