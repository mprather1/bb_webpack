var Backbone = require("backbone");
var Marionette = require('marionette');
var User = require("./models/User");
var Users = require("./collections/Users");
var Facilities = require("./collections/Facilities");
var Devices = require("./collections/Devices");
var PageView = require("./views/PageView");
var DirectoryRouter = require("./router")

_.extend(Backbone.Validation.callbacks, {
  valid: function (view, attr, selector) {
    var $el = view.$('[name=' + attr + ']'), 
        $group = $el.closest('.form-group');
    $group.removeClass('has-error');
    $group.find('.help-block').html('').addClass('hidden');
  },
  invalid: function (view, attr, error, selector) {
    var $el = view.$('[name=' + attr + ']'), 
      $group = $el.closest('.form-group');
    $group.addClass('has-error');
    $group.find('.help-block').html(error).removeClass('hidden');
  }
});

var users = new Users();
var facilities = new Facilities();
var devices = new Devices();

users.fetch();
facilities.fetch();
devices.fetch();

var pageView = new PageView({
  users: users,
  facilities: facilities,
  devices: devices
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