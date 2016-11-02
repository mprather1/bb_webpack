var FormView = require("./FormView");

var AdminView = Backbone.Marionette.View.extend({
  tagName: 'div',
  template: require("../templates/admin-template.html"),
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
      heading: "Create new user"
    }));
  }
});

module.exports = AdminView;