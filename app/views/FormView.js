var UsersFormView = require("./UsersFormView");
var FacilitiesFormView = require("./FacilitiesFormView");

var FormView = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'container-fluid',
  template: require("../templates/form-template.html"),
  initialize: function(options){
    this.heading = options.heading,
    this.formType = options.formType,
    this.users = options.users,
    this.facilities = options.facilities,
    this.devices - options.devices
    if (this.formType === 'user'){
      this.newView = new UsersFormView({
        collection: this.users
      })
    }
    if (this.formType === 'facility'){
      this.newView = new FacilitiesFormView({
        collection: this.facilities
      })
    }
    if (this.formType === 'devices'){
      this.newView = new UsersFormView({
        collection: this.devices
      })
    }
  },
  serializeData: function(){
    return {
      'heading': this.heading
    }
  },
  ui: {
    submit: '.submit-button',
    cancel: '.cancel-button'
  },
  events: {
    'click @ui.submit': "submitForm",
    'click @ui.cancel': 'cancelForm'
  },
  regions: {
    body: {
      el: 'form',
      replaceElement: true
    }
  },
  onRender: function(){
    this.showChildView('body', this.newView)
  },
  submitForm: function(e){
    e.preventDefault();
    Backbone.trigger('form:submit')
  },
  cancelForm: function(e){
    e.preventDefault();
    Backbone.trigger('form:cancel')
  }
});

module.exports = FormView;