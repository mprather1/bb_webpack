var UsersFormView = require("./UsersFormView");

var FormView = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'container-fluid',
  template: require("../templates/form-template.html"),
  initialize: function(options){
    this.heading = this.options.heading
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
    this.showChildView('body', new UsersFormView({
      collection: this.collection,
    }))
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