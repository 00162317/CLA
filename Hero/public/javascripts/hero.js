window.onload = () =>{
    OneHero();
}



function getId(id) {
    console.log("------")
    console.log(id);

    let val1 = id;

    location.href = './hero?id=' + val1;
    //alert(val1);

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
