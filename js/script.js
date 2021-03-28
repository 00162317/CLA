//document.getElementById('button2').addEventListener('click', getSearchData);

var valor = document.getElementById('buscar_s');


function getId(id) {
    console.log("------")
    console.log(id);
    
    let val1 = id;

    location.href = './hero.html?id=' + val1;
    alert(val1);

    //getHero(val1);

}

function extra(){

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    console.log(queryString);
    const id= urlParams.get('id');
    console.log(id);

    getHero(id);

}

function getHero(val1) {
    fetch('https://www.superheroapi.com/api.php/3945365972188670/' + val1)
        .then(res => res.json())
        .then(data => {
            console.log(data.name);
        })
        .catch(err => {
            console.log(err);

            // Displaying to the UI
            document.getElementById('test2').innerHTML = err;
        });
}


function getSearchData() {
    //alert(valor.value);
    //valor='batman';
    fetch('https://www.superheroapi.com/api.php/3945365972188670/search/' + valor.value)
        .then(res => res.json())
        .then(data => {
            console.log(data.results);

            data.results.forEach(e => $('#test')
                .append(
                    '<div class="card" style="width: 18rem;">' +
                    '<img src="' + e.image.url + '" class="card-img-top" alt="...">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' + e.name + '</h5>' +
                    '<p class="card-text">' + e.appearance.gender + '</p>' +
                    '<button class="btn btn-primary" onclick="getId(' + e.id + ')" >' + 'Get' + '</button>' +
                    '</div>' +
                    '</div>'
                ));
        })
        .catch(err => {
            console.log(err);

            // Displaying to the UI
            document.getElementById('output2').innerHTML = err;
        });
}

function getAllHeros() {
    fetch('https://www.superheroapi.com/api.php/3945365972188670/21')
        .then(res => res.json())
        .then(data => {
            console.log(data.name);

            /*data.results.forEach(e=>$('#test')
            .append('<li>'+e.name+ '</li>' +
            '<li>'+e.appearance.gender+ '</li>' +
            '<li>'+ '<img src="'+e.image.url+'" width="25%">' + '</li>' ));*/

        })
        .catch(err => {
            console.log(err);

            // Displaying to the UI
            document.getElementById('output2').innerHTML = err;
        });
}
