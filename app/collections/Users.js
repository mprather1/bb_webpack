var User = require("../models/User");
var PageableCollection = require("backbone.paginator");
// console.log(Marionette)
var Users = Backbone.PageableCollection.extend({
  url: 'http://localhost:8000/api/users',
  model: User,
});

module.exports = Users;