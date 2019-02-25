const request = require('request');


var getPlace = (placeName, callback) => {
  console.log(placeName);
request({
  url:`https://api.opencagedata.com/geocode/v1/json?q=${placeName}&key=7d37134e77704222b2fd5fae4d6450ea`,
  json:true
},(error, response, body) => {
  if(error){
    callback('Unable to connect to Forecast.io server.');
  }else if(response.statusCode === 400){
    callback('Unable to fetch weather.');
  }else if(response.statusCode === 200){
    callback(undefined, {
      latitude: body.results[0].geometry.lat,
      longitude : body.results[0].geometry.lng,
    });
  }
});

};


module.exports.getPlace = getPlace;
