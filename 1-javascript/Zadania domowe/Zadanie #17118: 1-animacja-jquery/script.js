"use strict";

$('h2').css({
    'color': 'white',
    'font-size': '10px',
    'opacity': '0',
});


let kwadrat = $('#kwadrat');

kwadrat.css({
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
    'text-align': 'center',

});

let przycisk = $('#przycisk');


przycisk.click(
    function zmianaRozmiaru() {
        $(kwadrat).animate({
                'margin-left': '100px',
                'width': '100px',
                'height': '100px',
            }, 3000,

            function zmianaKoloru() {
                $(kwadrat).animate({
                    'background-color': 'blue',
                }, 5000)
            },

            function pojawiaSieTekst () {
                $('h2').animate({
                    'opacity': '1',
                }, 1000)
            },
        );
    });