const content = require('axios').default;

function GetStates(){
    return content.get('https://api-dev.techbubblegum.com/v1/content/states', {
     
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

function GetState(id_state){
    return content.get('https://api-dev.techbubblegum.com/v1/content/states/'+id_state, {
     
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

function GetCities(state_id){
    return content.get('https://api-dev.techbubblegum.com/v1/content/states/'+state_id+'/cities', {
     
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

function GetCity(state_id, id_city){
    return content.get('https://api-dev.techbubblegum.com/v1/content/states/'+state_id+'/cities/'+id_state, {
     
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

function GetCurrencies(){
    return content.get('https://api-dev.techbubblegum.com/v1/content/currencies', {
     
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

function GetCurrency(id_){
    return content.get('https://api-dev.techbubblegum.com/v1/content/currencies/'+id_, {
     
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

function GetRoles(){
    return content.get('https://api-dev.techbubblegum.com/v1/content/roles', {
     
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

function GetStore(id_, token){
    return content.get('https://api-dev.techbubblegum.com/v1/content/stores/'+id_+"?include=foreign-exchanges,promotions", {
     
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

function GetStores(latitude_, longitude_, kms_, token){
    return content.post('https://api-dev.techbubblegum.com/v1/content/stores', {
        latitude: parseFloat(latitude_),
        longitude: parseFloat(longitude_),
        rangeKms: kms_,
    },
    {
    headers: {
        'Authorization':'Bearer ' + token,
        'Content-Type': 'application/json',
        'Content-Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br'
    },
    });

}

module.exports.GetStores = GetStores;
module.exports.GetStore = GetStore;