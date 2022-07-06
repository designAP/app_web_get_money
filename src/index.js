const express = require('express');
const app = express();

const auth = require("./connections/Auth");
const content = require("./connections/Content");
const reservation = require("./connections/Reservations")

const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const { response } = require('express');


app.use(express.urlencoded({
extended: true
}));

app.use(cookieParser());

//session middleware
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
  secret: 'token',
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}));

app.post('/submit-login', (req, res) => {
  const username = req.body.user;
  const password = req.body.pass;

  console.log(username + " - " + password);
  //...

  auth.LogIn(username, password).then(function (response) {
    // manejar respuesta exitosa
    response = response.data;

    const token =  JSON.parse(JSON.stringify(response)).data.token;
    console.log(token);
    
    session=req.session;
    session.userid=username;
    session.token=token;
    console.log(req.session)

    res.sendFile(__dirname + '/public/auth/home.html' )
    
  }).catch(function (error) {
    if (error.response){

      console.log(error.response);
      
      }else if(error.request){
      
        console.log(error.request);
      
      }else if(error.message){
      
        console.log(error.message);
      
      }
  });

  //res.sendFile(__dirname + '/public/index.html' )
  
});

app.post('/submit-signup', (req, res) => {

  const name = req.body.name;
  const lastname = req.body.lastname;
  const email = req.body.Email;
  const phone = req.body.phone;
  const state = req.body.state;
  const city = req.body.city;
  const pass = req.body.pass;

  auth.SingUp(name, lastname, email, phone, pass, state, city).then(function (response) {
    // manejar respuesta exitosa
    response = response.data;

    console.log(response);
    res.sendFile(__dirname + '/public/home/home.html' )
    
  }).catch(function (error) {
    if (error.response){

      console.log(error.response);
      
      }else if(error.request){
      
        console.log(error.request);
      
      }else if(error.message){
      
        console.log(error.message);
      
      }
    //;
  });

});

app.get('/getSucursalesProximas', (req, res) => {

  const response = req.query;
  session=req.session;

  content.GetStores("21.1462897"/*response.latitude*/, "-86.852309"/*response.longitude*/, 10, session.token).then(function (response) {
    // manejar respuesta exitosa
    const respon = response.data;

    const data =  JSON.parse(JSON.stringify(respon)).data;
    console.log(data);
    res.json(data);
    
    }).catch(function (error) {
      if (error.response){

        console.log(error.response);
        
        }else if(error.request){
        
          console.log(error.request);
        
        }else if(error.message){
        
          console.log(error.message);
        
        }
    });


});

app.get('/getSucursal', (req, res) => {

  const response = req.query;
  session=req.session;

  content.GetStore(response.id, session.token).then(function (response) {
    // manejar respuesta exitosa
    const respon = response.data;

    const data =  JSON.parse(JSON.stringify(respon)).data;
    console.log(data);
    res.json(data);
    
    }).catch(function (error) {
      if (error.response){

        console.log(error.response);
        
        }else if(error.request){
        
          console.log(error.request);
        
        }else if(error.message){
        
          console.log(error.message);
        
        }
    });


});


app.get("/setReservation", (req, res) => {

  const response = req.query;
  session=req.session;

  console.log(response);
  console.log(session.token);

  reservation.setReservation(response.id, "" + new Date(), response.exchangeId, response.monto, session.token).then(function (response) {
    // manejar respuesta exitosa
    const respon = response.data;

    const data =  JSON.parse(JSON.stringify(respon)).data;
    console.log(data);
    res.json(data);
    
    }).catch(function (error) {
      if (error.response){

        console.log(error.response);
        
        }else if(error.request){
        
          console.log(error.request);
        
        }else if(error.message){
        
          console.log(error.message);
        
        }
    });

});

app.get("/getReservation", (req, res) => {

  const response = req.query;
  session=req.session;
  console.log("--------------------------------------");
  console.log(session.token);

  console.log("hola");

  console.log("--------------------------------------");

  reservation.GetReservations(session.tokenv ).then(function (response) {
    // manejar respuesta exitosa
    const respon = response.data;

    const data =  JSON.parse(JSON.stringify(respon)).data;
    console.log(data);
    res.json(data);
    
    }).catch(function (error) {
      if (error.response){

        console.log(error.response);
        
        }else if(error.request){
        
          console.log(error.request);
        
        }else if(error.message){
        
          console.log(error.message);
        
        }
    });

});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.get ('/' ,function (req , res) {

    console.log("--------------")
    session=req.session;
    console.log(req.session)
    if(session.userid){
      res.sendFile(__dirname + '/public/auth/home.html' )
    }else{
      res.sendFile(__dirname + '/public/home/home.html' )
    }
  // __ dirname: will resolve to your project folder.
} ) ;

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.get ('/reservaciones' ,function (req , res) {

  console.log("--------------")
  session=req.session;
  console.log(req.session)
  if(session.userid){
    res.sendFile(__dirname + '/public/reservations/reservaciones.html' )
  }else{
    res.sendFile(__dirname + '/public/home/home.html' )
  }
// __ dirname: will resolve to your project folder.
} ) ;



app.listen(3005, () => {
  console.log('Servidor web iniciado')
});

app.use(express.static(__dirname + '/public'));

