var User = Backbone.Model.extend({
  urlRoot: 'http://localhost:8000/api/users'
});

module.exports = User;