var validation = require("backbone.validation");
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