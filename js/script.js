//document.getElementById('button3').addEventListener('click', getDataFromExternalAPI);
document.getElementById('button2').addEventListener('click', getSearchData);
var valor = document.getElementById('buscar_s');
//document.getElementById('btn_buscar').addEventListener('click', getSearchData);

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
            .append('<li>'+e.name+ '</li>' + "<br>"+
            '<li>'+e.appearance.gender+ '</li>' + "<br>"+
            '<li>'+ '<img>' +e.image.url+ '</img>' + '</li>' + "<br>"));

        })
        .catch(err => {
            console.log(err);

            // Displaying to the UI
            document.getElementById('output2').innerHTML = err;
        });
}

/*
function getDataFromExternalAPI() {
    fetch('https://www.superheroapi.com/api.php/3945365972188670/' + '70')
        .then(res => res.json())
        .then(data => {
            console.log(data.name);
            var texto = data.name;
            document.getElementById('texto').innerHTML = texto;

            // Displaying to the UI
            let output = '';

            data.forEach(function(user) {
              output +=`<li>${user.power}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => {
            console.log(err);

            // Displaying to the UI
            document.getElementById('output').innerHTML = err;
        });

}*/