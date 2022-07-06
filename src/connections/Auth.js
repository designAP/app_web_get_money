const auth = require('axios').default;

function SingUp(name_, lastName_, email_, phone_, password_, stateId_, cityId_){
    return auth.post('https://api-dev.techbubblegum.com/v1/auth/sign-up', {
        firstName: name_,
        lastName: lastName_,
        email: email_,
        phone: phone_+"",
        password: password_,
        stateId: parseInt(stateId_),
        cityId: parseInt(cityId_)
    },
    {
    headers: {
        'Content-Type': 'application/json',
        'Content-Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br'
    },
    });

}

function LogIn(user_, password_){
    return auth.post('https://api-dev.techbubblegum.com/v1/auth/login', {
        username: user_,
        password: password_
    },
    {
    headers: {
        'Content-Type': 'application/json',
        'Content-Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br'
    },
    });

}

function verify(){
    return auth.get('https://api-dev.techbubblegum.com/v1/auth/verify', {
     
    },
    {
    headers: {
        'Authorization':'Bearer Cookie-Token',
        'Content-Type': 'application/json',
        'Content-Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br'
    },
    });
}

function LogOut(){
    return auth.post('https://api-dev.techbubblegum.com/v1/auth/logout', {
     
    },
    {
    headers: {
        'Authorization':'Bearer Cookie-Token',
        'Content-Type': 'application/json',
        'Content-Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br'
    },
    });
}

module.exports.LogIn = LogIn;
module.exports.SingUp = SingUp;