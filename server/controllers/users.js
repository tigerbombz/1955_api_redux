var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
  return {
    show: function(req, res) {
      User.find({}, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    post: function(req, res) {
      console.log("im in my controllers");
      User.create(req.body, function(err, results){
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      });
    },

    delete: function(req, res){
      User.remove({_id: req.params.id}, function (err, results){
      console.log(results);
      });
    }

  };
})();

