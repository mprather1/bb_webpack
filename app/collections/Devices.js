var Device = require("../models/Device");
var PageableCollection = require("backbone.paginator");

var Device = Backbone.PageableCollection.extend({
  url: 'http://localhost:8000/api/devices',
  mode: 'client',
  model: Device,
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

module.exports = Device;