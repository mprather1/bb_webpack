String.prototype.capitalizedFirstLetter = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
};

_.extend(Backbone.Validation.callbacks, {
  valid: function (view, attr, selector) {
    var $el = view.$('[name=' + attr + ']'), 
        $group = $el.closest('.form-group');
    $group.removeClass('has-error');
    $group.find('.help-block').html('').addClass('hidden');
  },
  invalid: function (view, attr, error, selector) {
    var $el = view.$('[name=' + attr + ']'), 
      $group = $el.closest('.form-group');
    $group.addClass('has-error');
    $group.find('.help-block').html(error).removeClass('hidden');
  }
});

var UsersFormView = Backbone.Marionette.View.extend({
  template: require("../templates/users-form-template.html"),
  initialize: function(){
    Backbone.Validation.bind(this, {
      model: this.model
    });
    this.listenTo(Backbone, 'form:submit', this.submitUsersForm)
  },
  submitUsersForm: function(){
    var userAttrs = {
      firstName: $('#firstName_input').val().capitalizedFirstLetter(),
      lastName: $('#lastName_input').val().capitalizedFirstLetter(),
      email: $('#email_input').val().toLowerCase(),
      phone: $('#phone_input').val()
    };
    this.model.set(userAttrs);
    if(this.model.isValid(true)){
      this.model.save();
      this.collection.add(this.model);
      Backbone.Validation.unbind(this);
      Backbone.trigger('form:cancel')
    }
  }
});

module.exports = UsersFormView;