var User = require("../models/User");
var PageableCollection = require("backbone.paginator");
var Users = Backbone.PageableCollection.extend({
  url: 'http://68.103.65.157:8000/api/users',
  mode: 'client',
  model: User,
  state: {
    pageSize: 14,
    sortKey: 'id',
    order: 1
  },
  queryParams: {
    totalPages: null,
    totalRecords: null,
  },
});

module.exports = Users;