const base = 'https://ada-project-c6176-default-rtdb.firebaseio.com';

//add json at the end bc Firebase gets a lot of diff data and by doing this u are specifying which u want.
fetch(`${base}/pets.json`)
    .then(response => response.json())
    .then(data => {
        createTable(data);
    });

//data i get from FETCH
const createTable = (data) => {
    const tbody = document.getElementById('pets-list')
    tbody.innerHTML = "";
    for (object in data) {
        const tr = document.createElement('tr');
        for (item in data[object]) {
            const td = document.createElement('td');
            td.innerHTML = data[object][item];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

