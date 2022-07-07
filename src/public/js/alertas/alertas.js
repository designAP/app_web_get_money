
  getAlerts();
 
 function getAlerts(){
    console.log("alerts");
    axios.get("getAlerts").then(function(res) {

          response = res.data;
          const datos =  response;

          table1 = document.getElementById("content_table_alerts");

          console.log(datos);
          datos.forEach((dato, indice, array) =>{
            console.log("-----" +indice);
            let id = dato.id;
            let currency = dato.currencyId;

            let tipo = dato.type;
            let monto = dato.value;

            var tr = document.createElement('tr');
            
            var td1 = document.createElement('td')
            td1.class = "pl-0 ml-n3";
            
            axios.get("/getCurrency?id=" + currency).then(function(res) {

              response = res.data;
              td1.innerHTML = '<span class="text-muted font-weight-500">'+response.name+'</span>';
            
            }).catch(function(err) {console.log(err);}).then(function() {});
            tr.appendChild(td1);

            var td3 = document.createElement('td')
            td3.className = "text-right";
            td3.innerHTML = '<span class="text-muted font-weight-500">'+tipo+'</span>';

            tr.appendChild(td3);

            var td4 = document.createElement('td')
            td4.className = "text-right";
            td4.innerHTML = '<span class="text-muted font-weight-500">'+monto+'</span>';

            tr.appendChild(td4);

            var td5 = document.createElement('td')
            td5.class = "text-right pr-0";
            
            var btn_ver = document.createElement("a");
            btn_ver.className = "btn btn-icon btn-light btn-hover-primary btn-sm";
            btn_ver.innerHTML = "Borrar";
            btn_ver.addEventListener("click", function(event){
              axios.get("/deleteAlert?id=" + id).then(function(res) {

                response = res.data;
              
              }).catch(function(err) {console.log(err);}).then(function() {});
              tr.appendChild(td1);
            });

            td5.appendChild(btn_ver);

            tr.appendChild(td5);

            table1.appendChild(tr);
            
          });
          

          console.log(res);
        
        
      })
      .catch(function(err) {
      console.log(err);
      })
      .then(function() {
        //loading.style.display = 'none';
      });

      function getMoneda(id){
        axios.get("/getCurrency?id=" + id).then(function(res) {

          response = res.data;
          const datos =  response;
        
      })
      .catch(function(err) {
      console.log(err);
      })
      .then(function() {
        //loading.style.display = 'none';
      });
      }
      
  }
