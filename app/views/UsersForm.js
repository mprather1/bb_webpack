var UsersFormView = Backbone.Marionette.View.extend({
  template: require("../templates/users-form-template.html"),
  initialize: function(){
    this.listenTo(Backbone, 'form:submit', this.submitUsersForm)
  },
  submitUsersForm: function(){
    var userAttrs = {
      firstName: $('#firstName_input').val(),
      lastName: $('#lastName_input').val(),
      email: $('#email_input').val(),
      phone: $('#phone_input').val()
    };
    this.model.set(userAttrs);
    // if(this.model.isValid(true)){
      this.model.save();
      this.collection.add(this.model);
      // Backbone.Validation.unbind(this);
      Backbone.trigger('form:cancel')
    // }
  }
  
});

module.exports = UsersFormView;