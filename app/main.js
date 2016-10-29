var Marionette = require('marionette');
var User = require("./models/User");
var Users = require("./collections/Users");
var UserView = require("./views/UserView");

var user = new User({name: 'Mike'});
var users = new Users([user]);

var userView = new UserView({
  model: user
})

$('body').html(userView.render().el)
