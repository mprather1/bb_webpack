var Marionette = require('marionette');

var DirectoryController = {
  showUsers: function(){
    Backbone.trigger('show:users')
  },
  showFacilities: function(){
    Backbone.trigger('show:facilities')
  },
  showDevices: function(){
    Backbone.trigger('show:devices')
  },
  showAdmin: function(){
    Backbone.trigger('show:admin')
  }
};

var DirectoryRouter = Marionette.AppRouter.extend({
  controller: DirectoryController,
  appRoutes: {
    'users': 'showUsers',
    'facilities': 'showFacilities',
    'devices': 'showDevices',
    'admin': 'showAdmin'
  }
});

module.exports = DirectoryRouter;
