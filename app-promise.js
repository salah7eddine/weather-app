const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    city: {
      demand: true,
      alias: 'City',
      describe: 'ID to fetch the post for',
      strring:true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  var placeCodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${argv.city}&key=7d37134e77704222b2fd5fae4d6450ea`;

  axios.get(placeCodeUrl).then((response) => {

    if(response.status.code === 500){
      throw new Error('Unable to find that address');
    }
    console.log(JSON.parse(response));

    var lat = response.latitude;
    var lng = response.longitude;
    var weatherUrl = `https://api.darksky.net/forecast/ad4dc22dd85a970b64fbcfc1ff77d326/${lat},${lng}`;
    console.log(response.data.results[0].formatted);
    console.log(weatherUrl);
    return axios.get(weatherUrl);
    
  }).then((response) => {
    var temperature = response.currently.temperature;
    var apparentTemperature = response.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
    
  }).catch((e) => {
    if(e.results === []){
      console.log('Unable to connect to API servers.');
    } else {
      console.log(e.message);
    }
  });

