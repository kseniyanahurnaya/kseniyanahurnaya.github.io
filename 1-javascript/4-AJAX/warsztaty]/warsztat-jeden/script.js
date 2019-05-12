const button = document.getElementById('przycisk');
const getData = () => {
    const data = fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(response => {
            // console.log(response);
            const user = response;
            console.log(user);
            const paragraf = document.createElement("p");

            paragraf.innerHTML = `
            <span>User ID: ${user.id}</span><br/>
            <span>User Name: ${user.name}</span><br/>
            <span>User Website: ${user.website}</span>`;



            // /////////////////////////////////////2 sposob
            // const userKeys = Object.keys(user);
            // userKeys.forEach(key => {
            //     const paragraf = document.createEvent('p');

            //     if (typeof user[key] === "string") {
            //         paragraf.innerHTML = `
            //         ${key.toLocaleUpperCase()} : ${user[key]}`
            //     };

            //  /////////////////////////////////////


            button.insertAdjacentElement('afterend', paragraf)
            ;

        });

}

document.getElementById("przycisk").addEventListener("click", getData);