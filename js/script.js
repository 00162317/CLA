document.getElementById('button3').addEventListener('click', getDataFromExternalAPI);

function getDataFromExternalAPI() {
    fetch('https://www.superheroapi.com/api.php/3945365972188670/70')
        .then(res => res.json())
        .then(data => {
          console.log(data.name);
          var texto = data.name;
          document.getElementById('texto').innerHTML=texto;
  
          // Displaying to the UI
          let output = '';
        
          /*data.forEach(function(user) {
            output +=`<li>${user.power}</li>`
          });*/
          document.getElementById('output').innerHTML = output;
        })
        .catch(err => {
          console.log(err);
  
          // Displaying to the UI
          document.getElementById('output').innerHTML = err;
        });
  
  }