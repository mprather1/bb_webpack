
var UserView = Backbone.Marionette.View.extend({
  tagName: 'div',
  template: require("../templates/hello.html"),
});

module.exports = UserView;