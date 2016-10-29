var UserView = require("./UserView");
var UsersView = Backbone.Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: UserView
});

module.exports = UsersView;