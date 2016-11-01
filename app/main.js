var Backbone = require("backbone");
var Marionette = require('marionette');
var User = require("./models/User");
var Users = require("./collections/Users");
var Facilities = require("./collections/Facilities");
var PageView = require("./views/PageView");
var DirectoryRouter = require("./router")
var users = new Users();
users.fetch();
var facilities = new Facilities();
facilities.fetch()

var pageView = new PageView({
  collection: users,
  facilities: facilities
});

var CorporateDirectory = new Marionette.Application({
  region: '#main',
  onStart: function(options){
    var router = new DirectoryRouter(options);
    Backbone.history.start();
  }
})
CorporateDirectory.start()
CorporateDirectory.showView(pageView)