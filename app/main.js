var Backbone = require("backbone");
var Marionette = require('marionette');
var User = require("./models/User");
var Users = require("./collections/Users");
var PageView = require("./views/PageView");

var users = new Users();
users.fetch();

var pageView = new PageView({
  collection: users
});

CorporateDirectory = new Marionette.Application({
  region: '#main'
})

CorporateDirectory.showView(pageView)