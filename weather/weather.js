const request = require('request');


var getWeather = (lat, lng, callback) => {
  
request({
  url:`https://api.darksky.net/forecast/ad4dc22dd85a970b64fbcfc1ff77d326/${lat},${lng}`,
  json:true
},(error, response, body) => {
  if(error){
    callback('Unable to connect to Forecast.io server.');
  }else if(response.statusCode === 400){
    callback('Unable to fetch weather.');
  }else if(response.statusCode === 200){
    callback(undefined, {
      temperature: body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature
    });
  }
});

};


module.exports.getWeather = getWeather;
