var FormView = require("./FormView");

var AdminView = Backbone.Marionette.View.extend({
  tagName: 'div',
  template: require("../templates/admin-template.html"),
  initialize: function(){
    this.listenTo(Backbone, 'form:cancel', this.clearFunction)
  },
  clear: _.template(' '),
  regions: {
    body: {
      el: '.form-view'
    }
  },
  ui: {
    newUserButton: '.new-user-btn'
  },
  events: {
    'click @ui.newUserButton': 'showUserForm'
  },
  showUserForm: function(){
    this.showChildView("body", new FormView({
      heading: "Create new user",
      collection: this.collection
    }));
  },
  clearFunction: function(){
    var view = this.getRegion('body');
    view.$el.html(' ');
  }
});

module.exports = AdminView;