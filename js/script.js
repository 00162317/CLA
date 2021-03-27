document.getElementById('button2').addEventListener('click', getSearchData);

var valor = document.getElementById('buscar_s');

function getData() {
    console.log("------")
}

function getSearchData() {
    alert(valor.value);
    //valor='batman';
    fetch('https://www.superheroapi.com/api.php/3945365972188670/search/' + valor.value)
        .then(res => res.json())
        .then(data => {
            console.log(data.results);
            
            data.results.forEach(e=>$('#test')
            .append('<li>'+e.name+ '</li>' +
            '<li>'+e.appearance.gender+ '</li>' +
            '<li>'+ '<img src="'+e.image.url+'" width="25%">' + '</li>' ));

        })
        .catch(err => {
            console.log(err);

            // Displaying to the UI
            document.getElementById('output2').innerHTML = err;
        });
}

function getAllHeros(){
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
