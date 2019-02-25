const yargs = require('yargs');

const postId = require('./postId/postId');

const weather = require('./weather/weather');
const place = require('./places/places');

const argv = yargs
  .options({
    postId: {
      demand: true,
      alias: 'idPost',
      describe: 'ID to fetch the post for',
      strring:true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;


  // Places 
  // 7d37134e77704222b2fd5fae4d6450ea 


  //console.log(argv);
  //var encodedId = encodeURIComponent(argv.Id);

  // postId.postIdInfo(argv.postId, (errorMessage, results) => {
  //   if(errorMessage){
  //     console.log(errorMessage);
  //   }else {
  //     console.log(JSON.stringify(results, undefined, 2));
  //   }
  // });


  

  place.getPlace('Maroc', (errorMessage, PlaceResults) => {
    if(errorMessage){
      console.log(errorMessage);
    } else {
      console.log(JSON.stringify(PlaceResults, undefined, 2));
      weather.getWeather(PlaceResults.latitude, PlaceResults.longitude , (errorMessage, weatherResults) => {
        if(errorMessage){
          console.log(errorMessage);
        } else {
          //console.log(JSON.stringify(weatherResults, undefined, 2));
          console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
        }
      });
    
    }
  });




 




