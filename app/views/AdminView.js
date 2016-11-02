var AdminView = Backbone.Marionette.View.extend({
  tagName: 'div',
  template: _.template("Admin")
});

module.exports = AdminView;