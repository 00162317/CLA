//document.getElementById('button2').addEventListener('click', getSearchData);
var valor = document.getElementById('buscar_s');
document.getElementById('todo');

function getId(id) {
    console.log("------")
    console.log(id);

    let val1 = id;

    location.href = './hero.html?id=' + val1;
    alert(val1);

}

function getId2(id) {
    console.log(id);
    let val1 = id;
    location.href = './fav.html?id=' + val1;
    alert(val1);
}


function favHero() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const id = urlParams.get('id');
    console.log(id);

    fetch('https://www.superheroapi.com/api.php/3945365972188670/' + id)
        .then(res => res.json())
        .then(data => {
            console.log(data.name);
            localStorageHero(data);
        })
        .catch(err => {
            console.log(err);
            // Displaying to the UI
            document.getElementById('test3').innerHTML = err;
        });

}

function localStorageHero(data) {

    var datos = {
        id: data.id,
        nombre: data.name,
        imagen: data.image.url
    };
    console.log("HEY: " + datos.id);

    var favoritos = localStorage.getItem("favoritos") || "[]";
    favoritos = JSON.parse(favoritos);
    var posLista = favoritos.findIndex(function (e) { return e.id == datos.id; });

    if (posLista > -1) {

        favoritos.splice(posLista, 1);
    } else {

        favoritos.push(datos);
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    //window.localStorage.clear();

    for (var i = 0; i < favoritos.length; i++) {
        console.log(favoritos[i]);
    }

    favoritos.forEach(e => $('#test3')
        .append(
            '<div class="card" style="width: 18rem;">' +
            '<div class="card-body">' +
            '<img src="' + e.imagen + '" class="card-img-top" alt="...">' +
            '<h5 class="card-title">' + e.id + '</h5>' +
            '<p class="card-text">' + e.nombre + '</p>' +
            '</div>' +
            '</div>'
        ));
}

function OneHero() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    console.log(queryString);
    const id = urlParams.get('id');
    console.log(id);

    getHero(id);

}

function datosHero(data) {
    var nombre = data.name;
    var idHero = data.id;
    var imagen = data.image.url;
    var genero = data.appearance.gender;
    var raza = data.appearance.race;
    var altura = data.appearance.height;
    var peso = data.appearance.weight;
    var colorOjo = data.appearance["eye-color"];
    var colorHair = data.appearance["hair-color"];
    var inteligencia = data.powerstats.intelligence;
    var fuerza = data.powerstats.strength;
    var velocidad = data.powerstats.speed;
    var durabilidad = data.powerstats.durability;
    var poder = data.powerstats.power;
    var combate = data.powerstats.combat;
    var nombreCompleto = data.biography["full-name"];
    var alterEgo = data.biography["alter-egos"];
    var alias = data.biography.aliases;
    var fechaNac = data.biography["place-of-birth"];
    var firstShow = data.biography["place-of-birth"];
    var publicador = data.biography.publisher;
    console.log(imagen);
    document.getElementById('idHero').innerHTML = idHero;
    document.getElementById('nombre').innerHTML = nombre;
    document.getElementById('imagen').src = imagen;
    document.getElementById('genero').innerHTML = genero;
    document.getElementById('raza').innerHTML = raza;
    document.getElementById('altura').innerHTML = altura;
    document.getElementById('peso').innerHTML = peso;
    document.getElementById('colorOjo').innerHTML = colorOjo;
    document.getElementById('colorHair').innerHTML = colorHair;
    document.getElementById('inteligencia').innerHTML = inteligencia;
    document.getElementById('fuerza').innerHTML = fuerza;
    document.getElementById('velocidad').innerHTML = velocidad;
    document.getElementById('durabilidad').innerHTML = durabilidad;
    document.getElementById('poder').innerHTML = poder;
    document.getElementById('combate').innerHTML = combate;
    document.getElementById('nombreCompleto').innerHTML = nombreCompleto;
    document.getElementById('alterEgo').innerHTML = alterEgo;
    document.getElementById('alias').innerHTML = alias;
    document.getElementById('fechaNac').innerHTML = fechaNac;
    document.getElementById('firstShow').innerHTML = firstShow;
    document.getElementById('publicador').innerHTML = publicador;
}

function getHero(val1) {
    fetch('https://www.superheroapi.com/api.php/3945365972188670/' + val1)
        .then(res => res.json())
        .then(data => {
            console.log(data.name);
            datosHero(data);
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
                    '<button class="btn btn-primary" onclick="getId(' + e.id + ')" >' + 'More information' + '</button>' +
                    '<button class="btn btn-primary" onclick="getId2(' + e.id + ')" >' + 'Fav' + '</button>' +
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
    var i, count = 0;
    for (i = 0; i < 732; i++) {
        count = i;
    }
    fetch('https://www.superheroapi.com/api.php/3945365972188670/' + count)
        .then(res => res.json())
        .then(data => {
            var texto = data.name;
            for (var j = 0; j < count; j++) {
                console.log(j + data.name);

                //document.getElementById('texto').innerHTML=texto;
                //data.forEach(e=>$('#test2').append('<li>'+e.name+'</li>'));
            }
            document.getElementById('texto').innerHTML = texto;



            /*data.results.forEach(e=>$('#test')
            .append('<li>'+e.name+ '</li>' +
            '<li>'+e.appearance.gender+ '</li>' +
            '<li>'+ '<img src="'+e.image.url+'" width="25%">' + '</li>' ));*/

        })
        .catch(err => {
            console.log(err);

            // Displaying to the UI
            document.getElementById('output').innerHTML = err;
        });
}
