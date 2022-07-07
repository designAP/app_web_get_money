const profile = require('axios').default;

function getPerfil(token){
    return profile.get('https://api-dev.techbubblegum.com/v1/profile', {
     
    },
    {
    headers: {
        'Authorization':'Bearer '+token,
        'Content-Type': 'application/json',
        'Content-Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br'
    },
    });
}

function getNotifications(token){
    return profile.get('https://api-dev.techbubblegum.com/v1/profile/notifications', {
     
    },
    {
    headers: {
        'Authorization':'Bearer '+token,
        'Content-Type': 'application/json',
        'Content-Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br'
    },
    });
}

module.exports.getPerfil = getPerfil;
module.exports.getNotifications = getNotifications;
