var users = require('./../controllers/users.js');

  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
  // verb: get, plural of target as the URI is the RESTful index method (it returns all friends)

    app.get('/users', function(req, res) {
      console.log("Im in my routes GET");
      users.show(req, res);
    })

    app.post('/users', function(req, res){
      users.post(req, res);
    });

    app.delete('/users/:id', function(req, res){
      console.log("MY REQ PARMS", req.params);
      users.delete(req, res);
    })

  };
