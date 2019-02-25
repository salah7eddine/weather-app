var getUser = (id, callback) => {
    var user = {
      id,
      name: 'Abousaid'
    };

    setTimeout(() => {
      callback(user);
    }, 3000);

};

getUser(31, (userObj) => {
  console.log(userObj);
});