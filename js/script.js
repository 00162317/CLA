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
