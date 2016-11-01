var Marionette = require('marionette');
var DirectoryController = {
  showUsers: function(){
    Backbone.trigger('show:users')
  },
  showFacilities: function(){
    Backbone.trigger('show:facilities')
  }
};

var DirectoryRouter = Marionette.AppRouter.extend({
  controller: DirectoryController,
  appRoutes: {
    'users': 'showUsers',
    'facilities': 'showFacilities'
  }
});

module.exports = DirectoryRouter;
