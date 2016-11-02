var FormView = require("./FormView");

var AdminView = Backbone.Marionette.View.extend({
  tagName: 'div',
  template: require("../templates/admin-template.html"),
  initialize: function(options){
    this.users = options.users,
    this.facilities = options.facilities,
    this.devices = options.devices
    
    this.listenTo(Backbone, 'form:cancel', this.clearFunction)
  },
  clear: _.template(' '),
  regions: {
    body: {
      el: '.form-view'
    }
  },
  ui: {
    newUserButton: '.new-form-btn'
  },
  events: {
    'click @ui.newUserButton': 'showForm'
  },
  showForm: function(e){
    this.showChildView("body", new FormView({
      users: this.users,
      facilities: this.facilities,
      devices: this.devices,
      formType: e.target.getAttribute('data-form-type'),
      heading: e.target.getAttribute('data-heading'),
    }));
  },
  clearFunction: function(){
    var view = this.getRegion('body');
    view.$el.html(' ');
  }
});

module.exports = AdminView;