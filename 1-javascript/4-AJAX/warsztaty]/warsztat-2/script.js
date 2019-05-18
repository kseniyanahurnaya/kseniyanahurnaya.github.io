$(() => {
    const getData = () => {
        $.getJSON('https://jsonplaceholder.typicode.com/users/1',
            response => {
                const paragraf = $('<p>');

                const user = response;

                paragraf.html(`
            <span>User ID: ${user.id}</span><br/>
            <span>User Name: ${user.name}</span><br/>
            <span>User Website: ${user.website}</span>
            `);
                $('#przycisk').after(paragraf);
            });
    }
    $('#przycisk').click(() => {
        getData();
    })
})












