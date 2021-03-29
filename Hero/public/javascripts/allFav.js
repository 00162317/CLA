window.onload = () => {
    favHero();
}

const favHero = () => {
    fetch('https://www.superheroapi.com/api.php/3945365972188670/' + 3)
        .then(res => res.json())
        .then(data => {
            console.log(data.name);
            localStorageHero(data);
        })
        .catch(err => {
            console.log(err);
            location.href = './error';
        });

}

const showCardHeroFav = (variable, e) => {
    $(variable).append(
        '<div class="cardMine">' +
        '<div class="containerCard">' +
        '<img src="' + e.imagen + '" class="card-img-top" alt="...">' +
        '<h5 class="card-title">' + e.id + '</h5>' +
        '<p class="card-text">' + e.nombre + '</p>' +
        '</div>' +
        '</div>'
    );
}

const localStorageHero = (data) => {
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
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    for (var i = 0; i < favoritos.length; i++) {
        console.log(favoritos[i]);
    }
    var j = 1;
    favoritos.forEach(function (e) {
        switch (j) {
            case 1: showCardHeroFav('#card1', e); break;
            case 2: showCardHeroFav('#card2', e); break;
            case 3: showCardHeroFav('#card3', e); break;
            case 4: showCardHeroFav('#card4', e); break;
            case 5: showCardHeroFav('#card5', e); break;
            case 6: showCardHeroFav('#card6', e); break;
            case 7: showCardHeroFav('#card7', e); break;
            case 8: showCardHeroFav('#card8', e); break;
            case 9: showCardHeroFav('#card9', e); break;
            case 10: showCardHeroFav('#card10', e); break;
            case 11: showCardHeroFav('#card11', e); break;
            case 12: showCardHeroFav('#card12', e); break;
        }
        j++;
    });

}

const deleteFav = () => {
    window.localStorage.clear();
}
