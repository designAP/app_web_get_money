
  function getSucursalesProximas(){
    if (navigator.geolocation) {
      console.log( "ola");
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log( "Geolocation is not supported by this browser.");
    }

    function showPosition(position) {
      console.log("Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude);

      axios.get('/getSucursalesProximas?latitude=' + position.coords.latitude + "&longitude="+position.coords.longitude)
      .then(function(res) {

          response = res.data;
          const datos =  response;

          table = document.getElementById("content_table");
          table.innerHTML = "";
          datos.forEach((dato, indice, array) =>{

            let img = dato.exchangeCenter.imageUrl;
            let name = dato.name;
            let id = dato.id;
            let rating = dato.rating;

            let venta = dato.foreignExchanges[0].priceForSell;
            let compra = dato.foreignExchanges[0].priceForBuy;

            let longitude = dato.foreignExchanges[0].longitude;
            let latitude = dato.foreignExchanges[0].latitude;

            var tr = document.createElement('tr');
            
            var td1 = document.createElement('td')
            td1.class = "pl-0 ml-n3";
            var img_ = document.createElement('img');
            
            img_.style="width:48px;";
            img_.width="48"
            img_.src = "" + img;


            td1.appendChild(img_);
            tr.appendChild(td1);

            var td2 = document.createElement('td')
            td2.class = "pl-0 ml-n3";
            var a1 = document.createElement('a');
            a1.className = "text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg";
            var div1 = document.createElement("div");
            div1.innerHTML = '<span class="font-weight-bolder text-dark-75">'+rating+'</span>';

            td2.appendChild(a1);
            td2.appendChild(div1);
            tr.appendChild(td2);

            var td3 = document.createElement('td')
            td3.className = "text-right";
            td3.innerHTML = '<span class="text-muted font-weight-500">'+venta+'</span>';

            tr.appendChild(td3);

            var td4 = document.createElement('td')
            td4.className = "text-right";
            td4.innerHTML = '<span class="text-muted font-weight-500">'+compra+'</span>';

            tr.appendChild(td4);

            var td5 = document.createElement('td')
            td5.class = "text-right pr-0";
            
            var btn_ver = document.createElement("a");
            btn_ver.className = "btn btn-icon btn-light btn-hover-primary btn-sm";
            btn_ver.innerHTML = "Ver Sucursal";
            btn_ver.addEventListener("click", function(event){
              // Find the nearest div ancestor and remove it.
              ver_sucursal(id);

              
            });

            td5.appendChild(btn_ver);

            var btn_favorito = document.createElement("button");
            btn_favorito.className = "btn btn-icon btn-light btn-hover-primary btn-sm mx-3";
            btn_favorito.innerHTML = "Añadir a Favoritos";
            btn_favorito.onClick = "anadir_favoritos("+id+")"

            td5.appendChild(btn_favorito);

            var btn_mapa = document.createElement("a");
            btn_mapa.className = "btn btn-icon btn-light btn-hover-primary btn-sm";
            btn_mapa.innerHTML = "Ver Mapa";
            btn_mapa.onClick="ver_mapa("+latitude+", "+longitude+")";

            td5.appendChild(btn_mapa);

            tr.appendChild(td5);

            table.appendChild(tr);
          });
          

          console.log(res);
        
        
      })
      .catch(function(err) {
      console.log(err);
      })
      .then(function() {
        //loading.style.display = 'none';
      });
      

    }

    
  }  

  function getSelectCity(){
    let value = document.getElementById("select_id").value;
    const currency = parseInt(document.getElementById("select_cu").value);
    let lat = 0;
    let long = 0; 

    switch(parseInt(value)){
      case 1:
        lat = "19.42847";
        long = "-99.12766";
      break;

      case 2:
        lat = "20.66682";
        long = "-103.39182";
        break;
    }

    axios.get('/getSucursalesProximas?latitude=' + lat + "&longitude="+long)
      .then(function(res) {

          response = res.data;
          const datos =  response;


          table = document.getElementById("content_table");
          table.innerHTML = "";
          datos.forEach((dato, indice, array) =>{

            let img = dato.exchangeCenter.imageUrl;
            let name = dato.name;
            let id = dato.id;
            let rating = dato.rating;

            dato.foreignExchanges.forEach((ex, indice, array) =>{
            
              let venta = ex.priceForSell;
              let compra = ex.priceForBuy;

              let longitude = ex.longitude;
              let latitude = ex.latitude;
              let currency_id = ex.currencyId;

              var tr = document.createElement('tr');
              
              var td1 = document.createElement('td')
              td1.class = "pl-0 ml-n3";
              var img_ = document.createElement('img');
              
              img_.style="width:48px;";
              img_.width="48"
              img_.src = "" + img;


              td1.appendChild(img_);
              tr.appendChild(td1);

              var td2 = document.createElement('td')
              td2.class = "pl-0 ml-n3";
              var a1 = document.createElement('a');
              a1.className = "text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg";
              var div1 = document.createElement("div");
              div1.innerHTML = '<span class="font-weight-bolder text-dark-75">'+rating+'</span>';

              td2.appendChild(a1);
              td2.appendChild(div1);
              tr.appendChild(td2);

              var td3 = document.createElement('td')
              td3.className = "text-right";
              td3.innerHTML = '<span class="text-muted font-weight-500">'+venta+'</span>';

              tr.appendChild(td3);

              var td4 = document.createElement('td')
              td4.className = "text-right";
              td4.innerHTML = '<span class="text-muted font-weight-500">'+compra+'</span>';

              tr.appendChild(td4);

              var td5 = document.createElement('td')
              td5.class = "text-right pr-0";
              
              var btn_ver = document.createElement("a");
              btn_ver.className = "btn btn-icon btn-light btn-hover-primary btn-sm";
              btn_ver.innerHTML = "Ver Sucursal";
              btn_ver.addEventListener("click", function(event){
                // Find the nearest div ancestor and remove it.
                ver_sucursal(id);

                
              });

              td5.appendChild(btn_ver);

              var btn_favorito = document.createElement("button");
              btn_favorito.className = "btn btn-icon btn-light btn-hover-primary btn-sm mx-3";
              btn_favorito.innerHTML = "Añadir a Favoritos";
              btn_favorito.onClick = "anadir_favoritos("+id+")"

              td5.appendChild(btn_favorito);

              var btn_mapa = document.createElement("a");
              btn_mapa.className = "btn btn-icon btn-light btn-hover-primary btn-sm";
              btn_mapa.innerHTML = "Ver Mapa";
              btn_mapa.onClick="ver_mapa("+latitude+", "+longitude+")";

              td5.appendChild(btn_mapa);

              tr.appendChild(td5);

              if(currency === 0){
                table.appendChild(tr);
              }else if(currency === currency_id){
                table.appendChild(tr);
              }

            
            });

            
          });
          

          console.log(res);
        
        
      })
      .catch(function(err) {
      console.log(err);
      })
      .then(function() {
        //loading.style.display = 'none';
      });
  }
  
  
  function ver_sucursal(id){

    axios.get('/getSucursal?id='+id)
    .then(function(res) {

        response = res.data;
        const datos =  response;
        const id = datos.id;
        const id_exchange = datos.foreignExchanges[0].id;
        const precio_dolar = datos.foreignExchanges[0].priceForSell;

        document.getElementById("suc_image").src=datos.exchangeCenter.imageUrl;

        document.getElementById("suc_name").innerHTML=datos.name;
        document.getElementById("suc_direc").innerHTML=datos.streetAddress;
        document.getElementById("suc_phone").innerHTML="Telef:"+datos.phone;
        document.getElementById("suc_calif").innerHTML=datos.rating + "estrellas";
        
        document.getElementById("suc_pesos").addEventListener("change", ()=>{
           monto_dolar = parseFloat(document.getElementById("suc_pesos").value) / parseFloat(precio_dolar);
           document.getElementById("suc_usd").value = monto_dolar;
        });

        $('#popup_suc').modal('show')
        console.log(datos);

        document.getElementById("suc_reservar").addEventListener("click", ()=>{
          set_reservation(id, id_exchange, document.getElementById("suc_usd").value);
       });

    })
    .catch(function(err) {
    console.log(err);
    })
    .then(function() {
      //loading.style.display = 'none';
    });

  }

  function set_reservation(id, exchangeId, monto){
    axios.get('/setReservation?id='+id+"&exchangeId="+exchangeId+"&monto="+monto)
    .then(function(res) {

        response = res.data;
        const datos =  response;
        console.log(datos);

        $('#popup_suc').modal('hide');

    })
    .catch(function(err) {
    console.log(err);
    })
    .then(function() {
      //loading.style.display = 'none';
    });
  }

  function anadir_favoritos(id){

  }
  
  function ver_mapa(latitude, longitude){

  }


  axios.get("/getCurrencies").then(function(res) {

      response = res.data;
      const datos =  response;

      select = document.getElementById("select_cu");
      select.innerHTML = "";
      datos.forEach((dato, indice, array) =>{

        var op = document.createElement("option");
        op.value = dato.id;
        op.innerHTML = dato.name;

        select.appendChild(op);

      });
    
  })
  .catch(function(err) {
  console.log(err);
  })
  .then(function() {
    //loading.style.display = 'none';
  });
     


