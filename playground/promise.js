var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a + b);
      } else {
        reject('Argumments must be numbers');
      }
    }, 1500)
  });
};

// asyncAdd(14,7).then((res) => {
//   console.log('Result: '+ res);
//   return asyncAdd(res, 79);
// }, (errorMessage) => {
//   console.log(errorMessage);
// }).then((res) => {
//   console.log("Should be 100", res);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });


asyncAdd(14,7)
  .then((res) => {
    console.log('Result: '+ res);
    return asyncAdd(res, 79);
  })
  .then((res) => {
    console.log("Should be 100", res);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey. It worked!');
//     // reject('unable to fulfill ptomise');
//   }, 2500);
// });

// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// }); 