// const getData = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data=> {
//         console.log(data);
//     })
// }


const getData = () => {
    if (window.scrollY + window.innerHeight > document.body.offsetHeight) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                data.forEach(user => {
                    const container = document.getElementById('line');
                    container.innerHTML += ` 
                    <p>ID: ${user.id}</p>
                    <p>NAME: ${user.name}</p>
                    <p>WEBSITE: ${user.website}</p>
                    <p>-------------------</p>
                    `;
                });
               

            })
    }
}




window.addEventListener('scroll', getData);





// let wrap = document.getElementById('#line');
// let content = wrap.offsetHight;
// console.log(content);