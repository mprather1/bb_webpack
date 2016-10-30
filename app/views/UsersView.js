var UserView = require("./UserView");

var UsersView = Backbone.Marionette.CollectionView.extend({
  tagName: 'tbody',
  childView: UserView,
  // initialize: function(){
  //   this.collection.setSorting('lastName', -1)
  //   this.collection.fullCollection.sort();
  // }
});

module.exports = UsersView;