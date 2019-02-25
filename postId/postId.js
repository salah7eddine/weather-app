const request = require('request');


var postIdInfo = (id, callback) => {

request({
  url: 'http://jsonplaceholder.typicode.com/comments?postId='+ id.replace(/[^0-9]/g, ''),
  json: true
}, (error, response, body) => {

  if(error){
    //console.log('Unable to connect to jsonplaceholder servers.');
    callback('Unable to connect to jsonplaceholder servers.');
  }else if(body.length === 0 ){
    //console.log('Unable to find that Post.');
    callback('Unable to find that Post.');
  }else if (body.length){
    callback(undefined, {
      name: body[0].name,
      email: body[0].email,
      post: body[0].body
    })
    // console.log('Name: '+ body[0].name +', email: '+ body[0].email );
    // console.log('Post: '+ body[0].body);
  }


  //console.log(JSON.stringify(body, undefined, 2));
  //console.log(JSON.stringify(response, undefined, 2));
  //console.log(JSON.stringify(error, undefined, 2));
   
});

}

module.exports = {
  postIdInfo
};