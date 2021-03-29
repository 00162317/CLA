var valor = document.getElementById('buscar_s');
document.getElementById('todo');

function getId(id) {
    console.log("------")
    console.log(id);
    let val1 = id;
    location.href = './hero?id=' + val1;
}

function getId2(id) {
    console.log(id);
    let val1 = id;
    location.href = './fav?id=' + val1;

}


function showCardHero(nombreCard, e) {
    $(nombreCard).append('<div class="cardMine">' +
        '<div class="containerCard">'+
        '<img src="' + e.image.url + '" class="cardPicHero" alt="...">' +
        '<h5>' + e.name + '</h5>' +
        '<p>' + e.appearance.gender + '</p>' +
        '<button class="btn btn-primary" onclick="getId(' + e.id + ')" >' + '<i class="fas fa-info-circle"></i>' + '</button>' +
        '<button class="btn btn-primary" onclick="getId2(' + e.id + ')" >' + '<i class="far fa-star"></i>' + '</button>' +
        '</div>'+
        '</div>');
}


function getSearchData() {

    fetch('https://www.superheroapi.com/api.php/3945365972188670/search/' + valor.value)
        .then(res => res.json())
        .then(data => {
            console.log(data.results);
            var i = 1;
            data.results.forEach(function (e) {
                //console.log("Cantidad: " + i + " - " + "Nombre: " + e.name);
                switch (i) {
                    case 1: showCardHero('#card1', e); break; case 2: showCardHero('#card2', e); break;
                    case 3: showCardHero('#card3', e); break; case 4: showCardHero('#card4', e); break;
                    case 5: showCardHero('#card5', e); break; case 6: showCardHero('#card6', e); break;
                    case 7: showCardHero('#card7', e); break; case 8: showCardHero('#card8', e); break;
                    case 9: showCardHero('#card9', e); break; case 10: showCardHero('#card10', e); break;
                    case 11: showCardHero('#card11', e); break; case 12: showCardHero('#card12', e); break;
                }
                i++;
            })
        })
        .catch(err => {
            console.log(err);

            // Displaying to the UI
            location.href='./error';
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

            var datos = {
                id: data.id,
                nombre: data.name,
                imagen: data.image.url
            };

            for (var j = 0; j < count; j++) {
                console.log(j + " " + data.name);
                console.log(datos.id);
                //document.getElementById('texto').innerHTML=texto;
                //data.forEach(e=>$('#test2').append('<li>'+e.name+'</li>'));
            }
            document.getElementById('test4').innerHTML = texto;

            /*data.results.forEach(e=>$('#test')
            .append('<li>'+e.name+ '</li>' +
            '<li>'+e.appearance.gender+ '</li>' +
            '<li>'+ '<img src="'+e.image.url+'" width="25%">' + '</li>' ));*/

        })
        .catch(err => {
            console.log(err);
            // Displaying to the UI
            document.getElementById('test4').innerHTML = err;
        });
}
