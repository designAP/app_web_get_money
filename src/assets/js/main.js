axios.get('https://api-dev.techbubblegum.com/v1/content/states')
    .then(function(res) {
      if(res.status==200) {
        mensaje.innerHTML = res.data;
      }
      console.log(res);
    })
    .catch(function(err) {
      mensaje.innerText = 'Error de conexión ' + err;
    })
    .then(function() {
      loading.style.display = 'none';
    });