var validation = require("backbone.validation");
_.extend(Backbone.Validation.callbacks, {
  valid: function (view, attr, selector) {
    var $el = view.$('[name=' + attr + ']'), 
        $group = $el.closest('.form-group');
    $group.removeClass('has-error');
    $group.find('.help-block').html('').addClass('hidden');
  },
  invalid: function (view, attr, error, selector) {
    console.log('invalid')
    var $el = view.$('[name=' + attr + ']'), 
      $group = $el.closest('.form-group');
    $group.addClass('has-error');
    $group.find('.help-block').html(error).removeClass('hidden');
  }
});
var User = Backbone.Model.extend({
  urlRoot: 'http://localhost:8000/api/users',
  validation: {
    firstName: {
      required: true
    },
    lastName: {
      required: true
    },
    email: {
      required: true,
      pattern: 'email'
    },
    phone: {
      required: true,
      pattern: 'number',
      minLength: 10,
      maxLength: 10
    }
  },
});

module.exports = User;