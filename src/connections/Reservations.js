const reser = require('axios').default;

function GetReservations(token){

    return reser.get('https://api-dev.techbubblegum.com/v1/reservations',
    {
    headers: {
        'Authorization':'Bearer '+token,
        'Content-Type': 'application/json',
        'Content-Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
    },
    });
}


function setReservation(store_id, date_, ExchangeId_, amount_, token){
    return reser.post('https://api-dev.techbubblegum.com/v1/reservations', {
        storeId: store_id,
        dateForOperation: date_,
        foreignExchangeId: ExchangeId_,
        amount: amount_,
        convertToLocalCurrency: false,
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

module.exports.setReservation = setReservation;
module.exports.GetReservations = GetReservations;
