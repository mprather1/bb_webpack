var User = require("../models/User");

var Users = Backbone.Collection.extend({
  url: 'http://localhost:8000/api/users',
  model: User,
});

module.exports = Users;