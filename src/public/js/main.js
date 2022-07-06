
//Cargar Estados
estados_select = document.getElementById("select_states");
estados_select.innerHTML = "<option selected>Elije tu Estado</option>";
axios.get('https://api-dev.techbubblegum.com/v1/content/states')
    .then(function(res) {
      if(res.status==200) {
        res.data.data.forEach((element, indice, array) =>{
            var opt = document.createElement('option');
            opt.value = element.id;
            opt.innerHTML = element.name;
            select_states.appendChild(opt);
        });
      }
      console.log(res);
    })
    .catch(function(err) {
     console.error(err);
    })
    .then(function() {
      //loading.style.display = 'none';
    });


    $('#select_states').change(function(){

      var select_city = document.getElementById("select_city");
      select_city.innerHTML = "<option selected>Elije tu Ciudad</option>";
      axios.get('https://api-dev.techbubblegum.com/v1/content/states/' + $(this).val() + "/cities")
        .then(function(res) {
          if(res.status==200) {
            res.data.data.forEach((element, indice, array) =>{
                var opt = document.createElement('option');
                opt.value = element.id;
                opt.innerHTML = element.name;
                select_city.appendChild(opt);
            });
          }
          console.log(res);
        })
        .catch(function(err) {
        console.error(err);
        })
        .then(function() {
          //loading.style.display = 'none';
        });  

    });

  function getSucursalesProximas(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }

    function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
    }
    
  }    
     