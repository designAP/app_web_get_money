const alert = require('axios').default;

function getAlerts(token){
    console.log("----------- bearer " +token)
    return alert.get('https://api-dev.techbubblegum.com/v1/alerts',
    {
    headers: {
        'Authorization':'Bearer '+token,
        'Content-Type': 'application/json',
        'Content-Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
    },
    });
}

function deleteAlert(id, token){
    return alert.delete('https://api-dev.techbubblegum.com/v1/alerts/'+id, 
    {
    headers: {
        'Authorization':'Bearer '+token,
        'Content-Type': 'application/json',
        'Content-Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br'
    },
    });
}

module.exports.getAlerts = getAlerts;
module.exports.deleteAlert = deleteAlert;