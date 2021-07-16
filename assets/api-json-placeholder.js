//alert("Soy un api");
let btnUsers = document.querySelector('#btnUsers');
let divUsers = document.querySelector('#users');

/*btnUsers.addEventListener('click', () => {
    let getUsers = fetch('https://jsonplaceholder.typicode.com/users');
    getUsers
        .then(resp => resp.json())
        .then(data => {
            data.forEach(user => {
                let parrafo = document.createElement('p');
                parrafo.textContent = user.name;
                divUsers.appendChild(parrafo);
            });
        }).catch(e => console.log(e));
});*/

/*async function displayData(){
    let getUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = getUsers.json();
    console.log(data);
}*/

async function displayData(){
    let getUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(getUsers.ok);

    data.forEach(user => {
        let parrafo = document.createElement('p');
        parrafo.textContent = user.name;
        divUsers.appendChild(parrafo);
    });
    console.log(data);

}

displayData();