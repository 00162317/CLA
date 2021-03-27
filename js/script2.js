document.getElementById('todo').addEventListener('click', getAllHeros);



function getAllHeros() {
    var i, count=0;
    for (i = 0; i < 732; i++) {
        count = i;
    }
    fetch('https://www.superheroapi.com/api.php/3945365972188670/' + count)
        .then(res => res.json())
        .then(data => {
            var texto = data.name;
            for(var j = 0;j<count;j++){
                console.log(data.name);
                
                //document.getElementById('texto').innerHTML=texto;
                //data.forEach(e=>$('#test2').append('<li>'+e.name+'</li>'));
            }
            document.getElementById('texto').innerHTML=texto;

            

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
