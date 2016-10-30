var Marionette = require('marionette');
var User = require("./models/User");
var Users = require("./collections/Users");
var TableView = require("./views/TableView");

var users = new Users();
users.fetch()
console.log(users)
var tableView = new TableView({
  collection: users
})

$('body').html(tableView.render().el)
