const request = require('request');



var geocodeAddress = (city) => {
  return new Promise((resolve, reject) => {
    request({
      url:`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=7d37134e77704222b2fd5fae4d6450ea`,
      json:true
    },(error, response, body) => {
      if(error){
        reject('Unable to connect to Forecast.io server.');
      }else if(response.statusCode === 400){
        reject('Unable to fetch weather.');
      }else if(response.statusCode === 200){
        resolve({
          latitude: body.results[0].geometry.lat,
          longitude : body.results[0].geometry.lng,
        });
      }
    });
  }); 
  
};

geocodeAddress('Rabat').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
