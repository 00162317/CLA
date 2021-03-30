window.onload = () => {
    getTopHeros();
}

const getId = (id) => {
    console.log("------")
    console.log(id);
    let val1 = id;
    location.href = './hero?id=' + val1;
}

const getId2 = (id) => {
    console.log(id);
    let val1 = id;
    location.href = './fav?id=' + val1;

}

const getTopHeros = () => {

    var batman = 'https://www.superheroapi.com/api.php/3945365972188670/70'; var superman = 'https://www.superheroapi.com/api.php/3945365972188670/644';
    var spiderman = 'https://www.superheroapi.com/api.php/3945365972188670/620'; var wolverine = 'https://www.superheroapi.com/api.php/3945365972188670/717';
    var daredevil = 'https://www.superheroapi.com/api.php/3945365972188670/201'; var wonderWoman = 'https://www.superheroapi.com/api.php/3945365972188670/720';
    var sandman = 'https://www.superheroapi.com/api.php/3945365972188670/572'; var ironMan = 'https://www.superheroapi.com/api.php/3945365972188670/346';
    var hulk = 'https://www.superheroapi.com/api.php/3945365972188670/332'; var america = 'https://www.superheroapi.com/api.php/3945365972188670/149';
    var flash = 'https://www.superheroapi.com/api.php/3945365972188670/263'; var DeadPool = 'https://www.superheroapi.com/api.php/3945365972188670/213';

    fetch(batman).then(res => res.json()).then(data => { showCardHero('#card1', data); })
        .catch(err => { location.href = './error'; });

    fetch(superman).then(res => res.json()).then(data => { showCardHero('#card2', data); })
        .catch(err => { location.href = './error'; });

    fetch(spiderman).then(res => res.json()).then(data => { showCardHero('#card3', data); })
        .catch(err => { location.href = './error'; });

    fetch(wolverine).then(res => res.json()).then(data => { showCardHero('#card4', data); })
        .catch(err => { location.href = './error'; });

    fetch(daredevil).then(res => res.json()).then(data => { showCardHero('#card5', data); })
        .catch(err => { location.href = './error'; });

    fetch(wonderWoman).then(res => res.json()).then(data => { showCardHero('#card6', data); })
        .catch(err => { location.href = './error'; });

    fetch(sandman).then(res => res.json()).then(data => { showCardHero('#card7', data); })
        .catch(err => { location.href = './error'; });

    fetch(ironMan).then(res => res.json()).then(data => { showCardHero('#card8', data); })
        .catch(err => { location.href = './error'; });

    fetch(hulk).then(res => res.json()).then(data => { showCardHero('#card9', data); })
        .catch(err => { location.href = './error'; });

    fetch(america).then(res => res.json()).then(data => { showCardHero('#card10', data); })
        .catch(err => { location.href = './error'; });

    fetch(flash).then(res => res.json()).then(data => { showCardHero('#card11', data); })
        .catch(err => { location.href = './error'; });

    fetch(DeadPool).then(res => res.json()).then(data => { showCardHero('#card12', data); })
        .catch(err => { location.href = './error'; });
}

const showCardHero = (nombreCard, e) => {
    $(nombreCard).append('<div class="cardMine">' +
        '<div class="containerCard">' +
        '<img src="' + e.image.url + '" class="cardPicHero" alt="...">' +
        '<h5>' + e.name + '</h5>' +
        '<p>' + e.appearance.gender + '</p>' +
        '<button class="btn btn-primary" onclick="getId(' + e.id + ')" >' + '<i class="fas fa-info-circle"></i>' + '</button>' +
        '<button class="btn btn-primary" onclick="getId2(' + e.id + ')" >' + '<i class="far fa-star"></i>' + '</button>' +
        '</div>' +
        '</div>');
}

