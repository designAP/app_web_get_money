
   
  getReservados();
 
 function getReservados(){
    axios.get("/getReservation").then(function(res) {

          response = res.data;
          const datos =  response;

          table1 = document.getElementById("content_table_pendientes");
          table2 = document.getElementById("content_table_aprobadas");
          table3 = document.getElementById("content_table_canceladas");
          table4 = document.getElementById("content_table_concluidas");

          console.log(datos);
          datos.forEach((dato, indice, array) =>{
            console.log("-----" +indice);
            let img = dato.store.imageUrl;
            let id = dato.id;
            let status = dato.status.name;

            let Entregas = dato.amount;
            let Recibes = dato.total;

            var tr = document.createElement('tr');
            
            var td1 = document.createElement('td')
            td1.class = "pl-0 ml-n3";
            var img_ = document.createElement('img');
            
            img_.style="width:48px;";
            img_.width="48"
            img_.src = "" + img;


            td1.appendChild(img_);
            tr.appendChild(td1);

            var td3 = document.createElement('td')
            td3.className = "text-right";
            td3.innerHTML = '<span class="text-muted font-weight-500">'+Entregas+'</span>';

            tr.appendChild(td3);

            var td4 = document.createElement('td')
            td4.className = "text-right";
            td4.innerHTML = '<span class="text-muted font-weight-500">'+Recibes+'</span>';

            tr.appendChild(td4);

            var td5 = document.createElement('td')
            td5.class = "text-right pr-0";
            
            var btn_ver = document.createElement("a");
            btn_ver.className = "btn btn-icon btn-light btn-hover-primary btn-sm";
            btn_ver.innerHTML = "Ver Reservacion";
            btn_ver.addEventListener("click", function(event){
              // Find the nearest div ancestor and remove it.
              //ver_sucursal(id);

              
            });

            td5.appendChild(btn_ver);

            tr.appendChild(td5);

            if(status === "PENDIENTE"){
              console.log(tr);
              table1.appendChild(tr);
            }else if(status === "APROBADO"){
              table2.appendChild(tr);
            }else if(status === "CANCELADO"){
              table3.appendChild(tr);
            }else if(status === "CONCLUIDO"){
              table4.appendChild(tr);
            }

            
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
