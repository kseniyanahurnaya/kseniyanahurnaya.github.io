let jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian", 
            nazwisko: "Dziopa", 
            wzrost: 180, 
            oczy: "niebieskie", 
            zainteresowania: [ 
                { nazwa: "podroze" }, 
                { nazwa: "gotowanie" }
            ] 
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "gotowanie" },
                { nazwa: "języki" }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]
            
        }
    ]
}
console.log(jsonOsoby);

// for jsonOsoby  {
//     if (oczy="brązowe") {
//     console.log (imie + "  ma brązowe oczy");
// } else {
//     console.log (imie + " ma niebieskie oczy");
// }
// }

for (let osoba of jsonOsoby.osoby) {
    console.log(osoba.oczy);
}

jsonOsoby.osoby.forEach ((osoba) => {
    console.log(osoba.oczy);
})
