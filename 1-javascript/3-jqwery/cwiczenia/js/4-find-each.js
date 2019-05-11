$('body')
.find('.par2')
.text('Tekst zmieniony w metodzie find()')
.css('color', 'red');

let par2 = $('.par2');

par2.each(
    function(index, bierzacyParagraf){
       if (index ===0) {
           $(bierzacyParagraf)
           .css('color','green')
           .text('Teksr zmieniony metoda each()');
       }
       else if (index ===1){
        $(bierzacyParagraf)
        .css('color','blue')
        .text('Teksr zmieniony metoda each()');
    }
        else if (index ===2){
        $(bierzacyParagraf)
        .css('color','yellow')
        .text('Teksr zmieniony metoda each()');
    }
    }
);