var Marionette = require('marionette');
var User = require("./models/User");
var Users = require("./collections/Users");
var PageView = require("./views/PageView");

var users = new Users();
users.fetch();

var pageView = new PageView({
  collection: users
});

$('body').html(pageView.render().el);
