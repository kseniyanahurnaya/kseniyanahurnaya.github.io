// AJAX - fetch()-jezeli nie ma jquery

// fetch('https://jsonplaceholder.typicode.com/posts/')
// .then(response =>response.json())
// .then(response => {
//     console.log(response);
// });




// AJAX - $.getJSON - jezeli jquery jest zainstalowane

$.getJSON('https://jsonplaceholder.typicode.com/posts',
    response => {
        console.log(response);

    });




// AJAX - $.ajax()

// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/users/1",
//     dataType: "json",
//     success: function (resultJSON) {
//         console.log(resultJSON);
//     },
//     onerror: function (msg) {
//         console.log(msg);
//     }
// });





// funkcja AJAX w czystym JS


const ajax = (method, url) => {
    //tworzymy obiekt
    let httpReq = new XMLHttpRequest();

    //otwieramy polączenie
    httpReq.open(method, url);
    // console.log(httpReq);

    //w momencie dotarcia do servera
    httpReq.onreadystatechange = () => {

        //jeśliwszystko poszlo pomyslnie i dane zostaly zwrocone
        if (httpReq.readyState === 4 && httpReq.status === 200) {

            //wrzucamy dane do zmiennej
            let response = httpReq.responseText;

            //parsujemy JSON stringa do tablicy z obuektami
            response = JSON.parse(response);
            console.log(response);

            //rozłączamy sie z serverem
            httpReq = null;
        }
    };

    // wywolujemy onreadystatechange ()
    httpReq.send();
}

// usatawiamy odswiezanie co n(3) secund
setInterval(() => {
    ajax('GET', 'https://jsonplaceholder.typicode.com/users/');
}, 3000);