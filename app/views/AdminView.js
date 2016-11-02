var FormView = require("./FormView");

var AdminView = Backbone.Marionette.View.extend({
  tagName: 'div',
  template: require("../templates/admin-template.html"),
  initialize: function(options){
    
    this.users = options.users,
    this.facilities = options.facilities,
    this.devices = options.devices,

    this.listenTo(Backbone, 'form:cancel', this.clearFunction)

  },
  clear: _.template(' '),
  regions: {
    body: {
      el: '.form-view'
    }
  },
  ui: {
    newUserButton: '.btn'
  },
  events: {
    'click @ui.newUserButton': 'showUserForm'
  },
  showUserForm: function(e){
    var formType = e.target.getAttribute('data-form-type');
    var heading = e.target.getAttribute('data-heading')
    this.showChildView("body", new FormView({
      heading: heading,
      formType: formType,
      users: this.users,
      facilities: this.facilities,
      devices: this.devices
    }));
  },
  clearFunction: function(){
    var view = this.getRegion('body');
    view.$el.html(' ');
  }
});

module.exports = AdminView;