var UserView = require("./UserView");
var UsersView = Backbone.Marionette.CollectionView.extend({
  tagName: 'tbody',
  childView: UserView
});

module.exports = UsersView;